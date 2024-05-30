import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { Picker } from '@react-native-picker/picker';
import { initializeApp } from 'firebase/app';
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../Config/firebaseConfig';
import { getAnalytics, isSupported } from "firebase/analytics";


  const InscriptionProfessors = () => {
      const [selectedValue, setSelectedValue] = useState();
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');
      const [programChoice, setProgramChoice] = useState('');
      const [data, setData] = useState([]);
      const cursorColor = '#7e7e7e';
    
      useEffect(() => {
        const fetchData = async () => {
          const db = getFirestore();
          const data = await getDocs(collection(db, "students"));
          setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        fetchData();
      }, []);
    
      const handleSubmit = async () => {
      if (!firstName || !lastName || !programChoice || !password || !email) {
        Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
        return;
      }
    
      try {
        await addDoc(collection(getFirestore(), "students"), {
          firstName: firstName,
          lastName: lastName,
          programChoice: programChoice,
          password: password,
          email: email,
        });
        Alert.alert('Success', 'Inscription réussie.');
        setFirstName('');
        setLastName('');
        setProgramChoice(null);
        setPassword('');
        setEmail('');
      } catch (e) {
        console.error("Error adding document: ", e);
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

export default InscriptionProfessors;
