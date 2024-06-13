import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Alert, TextInput, Dimensions, StyleSheet, TouchableOpacity, AppState } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../Config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';

const { width, height } = Dimensions.get('window');

const ConnectionStudents = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const handleAppStateChange = async (nextAppState) => {
      if (auth.currentUser) {
        const userStatusRef = doc(db, 'students', auth.currentUser.uid);
        if (nextAppState === 'active') {
          await updateDoc(userStatusRef, { statusConnection: 'online' });
        } else {
          await updateDoc(userStatusRef, { statusConnection: 'offline' });
        }
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, []);

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;
      const userRef = doc(db, 'students', uid);
      await updateDoc(userRef, {
        statusConnection: 'online',
      });
      navigation.navigate('HomeStudents');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center' }}>Students authentication</Text>
      <ImageBackground source={require('../Assets/connectionStudents.png')} style={styles.backgroundStudent}>
        <View style={styles.overlay}>
          <TextInput
            style={styles.input}
            placeholder="Identifiant"
            placeholderTextColor="#ccc"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStudent: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    height: '100%',
    width: width,
    position: 'absolute',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#E91212',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ConnectionStudents;
