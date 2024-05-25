// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
export const db = getFirestore(app);