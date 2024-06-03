import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCfAEKS11x16VrWerbaRGUnez73CuFVR7U",
  authDomain: "project-95e62.firebaseapp.com",
  projectId: "project-95e62",
  storageBucket: "project-95e62.appspot.com",
  messagingSenderId: "740783242277",
  appId: "1:740783242277:web:1a286dc61d01753f76d3cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth with AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, auth };
