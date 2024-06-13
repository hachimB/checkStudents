import React, { useState } from 'react';
import {
  View, TextInput, Button, StyleSheet, Text, Alert, SafeAreaView, ScrollView, TouchableOpacity, Image
} from 'react-native';
import { auth, db } from '../Config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InscriptionStudents = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [programChoice, setProgramChoice] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    setError(''); // Reset error message
    try {
      // Create the user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;

      const storage = getStorage();
      const storageRef = ref(storage, `imagesTeachers/${uid}`);

      const response = await fetch(selectedImage);
      const blob = await response.blob();
      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Monitor upload progress
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error("Error uploading image: ", error);
        },
        async () => {
          // Handle successful uploads on complete
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Add additional information to Firestore
          await setDoc(doc(db, 'teachers', uid), {
            uid: uid,
            firstName: firstName,
            lastName: lastName,
            // programChoice: programChoice,
            email: email,
            imageUrl: downloadURL,
            statusConnection: 'online',
          });

          console.log('User account created & signed in, and data added to Firestore!');

          // Redirect to the home page
          navigation.navigate('DrawerProfessors');
        }
      );
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('This email address is already in use.');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error(error);
    }
  };

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
              selectionColor="#E91212"
            />
            <Entypo name='user' style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Last Name'
              value={lastName}
              onChangeText={setLastName}
              selectionColor="#E91212"
            />
            <Entypo name='user' style={styles.icon} />
          </View>
          {/* <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Program Choice'
              value={programChoice}
              onChangeText={setProgramChoice}
              selectionColor="#E91212"
            />
          </View> */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Email'
              value={email}
              onChangeText={setEmail}
              selectionColor="#E91212"
            />
            <MaterialCommunityIcons name='email-multiple-outline' style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
              selectionColor="#E91212"
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.copyRight}>
          <Text style={styles.bottomText}>Tous Droit Reservés</Text>
          <Text style={styles.bottomText}>Provided By ThingsApp</Text>
          <Text style={styles.bottomText}>Copyright &#169; 2024</Text>
        </View>
      </ScrollView>
      {error ? <Text style={styles.error}>{error}</Text> : null}
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
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default InscriptionStudents;
