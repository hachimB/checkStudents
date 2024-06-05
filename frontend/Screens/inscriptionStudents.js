import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, SafeAreaView } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, db } from '../Config/firebaseConfig'; // Ensure auth and db are properly exported from your firebaseConfig

const InscriptionStudents = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [programChoice, setProgramChoice] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);
  const [statusConnection, setStatusConnection] = useState('disconnected');
  const cursorColor = '#7e7e7e';

  useEffect(() => {
    const fetchData = () => {
      const unsubscribe = onSnapshot(collection(getFirestore(), "students"), (snapshot) => {
        setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });
      return () => unsubscribe();
    };
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setStatusConnection('connected');
      } else {
        setStatusConnection('disconnected');
      }
    });
    return () => unsubscribe();
  }, []);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Error', 'Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!firstName || !lastName || !programChoice || !password || !email || !selectedImage) {
      Alert.alert('Error', 'Fill all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Enter a valid email');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create a reference to the file in Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `images/${user.uid}`);
      
      // Convert the image URI to a Blob
      const response = await fetch(selectedImage);
      const blob = await response.blob();

      // Upload the image to Firebase Storage
      const uploadTask = uploadBytesResumable(storageRef, blob);

      // Monitor the upload task to handle progress, error, and completion
      uploadTask.on('state_changed', 
        (snapshot) => {
          // You can use this function to monitor the upload progress
        }, 
        (error) => {
          // Handle unsuccessful uploads
          console.error("Error uploading image: ", error);
        }, 
        async () => {
          // Handle successful uploads on complete
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
          // Save the download URL in Firestore
          await addDoc(collection(getFirestore(), "students"), {
            uid: user.uid,
            firstName: firstName,
            lastName: lastName,
            programChoice: programChoice,
            email: email,
            imageUrl: downloadURL, // Store the download URL instead of the local URI
            statusConnection: statusConnection
          });

          Alert.alert('Success', 'Registration successful.');
          setFirstName('');
          setLastName('');
          setProgramChoice('');
          setPassword('');
          setEmail('');
          setSelectedImage(null);
        }
      );
    } catch (e) {
      console.error("Error during registration: ", e);
      if (e.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'The email address is already in use by another account.');
      } else if (e.code === 'auth/invalid-email') {
        Alert.alert('Error', 'The email address is not valid.');
      } else if (e.code === 'auth/weak-password') {
        Alert.alert('Error', 'The password is too weak.');
      } else {
        Alert.alert('Error', 'An error occurred during registration.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stickyContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../Assets/checkStudents.jpg')} style={styles.logo} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
            ) : (
              <Text style={styles.imagePickerText}>Pick an image</Text>
            )}
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='First Name'
              value={firstName}
              onChangeText={setFirstName}
              selectionColor={cursorColor}
            />
            <Entypo name='user' style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Last Name'
              value={lastName}
              onChangeText={setLastName}
              selectionColor={cursorColor}
            />
            <Entypo name='user' style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Program Choice'
              value={programChoice}
              onChangeText={setProgramChoice}
              selectionColor={cursorColor}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Email'
              value={email}
              onChangeText={setEmail}
              selectionColor={cursorColor}
            />
            <MaterialCommunityIcons name='email-multiple-outline' style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
              selectionColor={cursorColor}
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Inscription</Text>
          </TouchableOpacity>
        </View>
     
        <View style={styles.copyRight}>
          <Text style={styles.bottomText}>Tous Droit Reservés</Text>
          <Text style={styles.bottomText}>Provided By ThingsApp</Text>
          <Text style={styles.bottomText}>Copyright &#169; 2024</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickyContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 220, // Adjusted to ensure form starts below the sticky header
  },
  imagePicker: {
    width: '90%',
    height: 150,
    borderColor: '#E91212',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePickerText: {
    color: '#7e7e7e',
    fontSize: 18,
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
    position: 'relative',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#E91212',
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 20,
    color: '#E91212',
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  copyRight: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default InscriptionStudents;
