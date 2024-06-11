import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, AppState } from 'react-native';
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
        } else {
          // User is offline
          await updateDoc(userStatusRef, { statusConnection: 'offline' });
        }
      }
    };

    fetchUserInfo(); // Fetch user info when the component mounts
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
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
          <Text>Image URL: {userInfo.imageUrl}</Text>
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
});

export default HomePage;

