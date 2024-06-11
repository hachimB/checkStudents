import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, AppState, Image } from 'react-native';
import { auth, db } from '../Config/firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const HomePage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, 'students', auth.currentUser.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserInfo(userDoc.data());
        }
      }
    };

    const handleAppStateChange = async (nextAppState) => {
      if (auth.currentUser) {
        const userStatusRef = doc(db, 'students', auth.currentUser.uid);
        if (nextAppState === 'active') {
          // User is online
          await updateDoc(userStatusRef, { statusConnection: 'online' });
          fetchUserInfo(); // Fetch user info when the app comes to the foreground
        } else {
          // User is offline
          await updateDoc(userStatusRef, { statusConnection: 'offline' });
          setUserInfo(null); // Clear user info when the app goes to the background
        }
      }
    };

    fetchUserInfo(); // Fetch user info when the component mounts
    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove(); // Clean up the subscription on component unmount
    };
  }, []);

  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
          <Text>Welcome, {userInfo.firstName} {userInfo.lastName}!</Text>
          <Text>Email: {userInfo.email}</Text>
          <Text>Program Choice: {userInfo.programChoice}</Text>
          <Text>Status: {userInfo.statusConnection}</Text>
          {userInfo.imageUrl ? (
            <Image
              source={{ uri: userInfo.imageUrl }}
              style={styles.image}
            />
          ) : (
            <Text>No image available</Text>
          )}
        </>
      ) : (
        <Text>Loading user information...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 16,
  },
});

export default HomePage;
