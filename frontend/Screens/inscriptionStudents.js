import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons/build/Icons';
import { Ms, Vs, rS } from '../Responsive/responsive';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../Config/firebaseConfig';
import { getAnalytics, isSupported } from "firebase/analytics";

const InscriptionStudents = () => {
  const [selectedValue, setSelectedValue] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [programChoice, setProgramChoice] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const data = await getDocs(collection(db, "students"));
      setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }
    fetchData();
  }, []);

  const handleSubmit = async () => {
  if (!firstName || !lastName || !selectedValue || !password || !email) {
    Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    return;
  }

  try {
    await addDoc(collection(getFirestore(), "students"), {
      firstName: firstName,
      lastName: lastName,
      programChoice: selectedValue,
      password: password,
      email: email,
    });
    Alert.alert('Success', 'Inscription réussie.');
    setFirstName('');
    setLastName('');
    setSelectedValue(null);
    setPassword('');
    setEmail('');
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

  return (
    <ScrollView>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', left: rS(-9), backgroundColor:'white'}}>
        <View style={{ flex: 1 }}>
          <Image style={{
            width: rS(100),
            height: Vs(100),
            top: Vs(80),
            left: 8,
            backgroundColor: 'white'
          }} source={require('../Assets/checkStudents.jpg')} />
        </View>
        <View style={{ flex: 1,top: rS(130), left: rS(10) }}>
          <TextInput style={styles.container} placeholder='First Name' value={firstName} 
          onChangeText={setFirstName} />
          <Entypo style={{ position: 'absolute', left: rS(290), top: Vs(77), fontSize: 14 }} name='user' />
          <TextInput style={styles.container} placeholder='Last Name' value={lastName} 
          onChangeText={setLastName} />
          <Entypo style={{ position: 'absolute', left: rS(290), top: Vs(144), fontSize: 14 }} name='user' />
          <TextInput style={styles.container} placeholder='program choice' value={programChoice} onChangeText={setProgramChoice}/>
          {/* <View style={styles.container}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={{
                height: Vs(50),
                width: rS(300),
                marginTop: Vs(-7),
                marginLeft: rS(-12)
              }}>
              <Picker.Item style={{fontFamily:'serif'}} label="Program Choice" value={programChoice} onChangeText={setProgramChoice}/>
              <Picker.Item label="AI" value="AI" />
              <Picker.Item label="ISI" value="ISI" />
              <Picker.Item label="MIL" value="MIL" />
              <Picker.Item label="CS" value="CS" />
            </Picker>
          </View> */}
          <TextInput style={styles.container} placeholder='Email' value={email} onChangeText={setEmail}/>

          <TextInput style={styles.container} placeholder='password' value={password} onChangeText={setPassword} secureTextEntry={true}/>

          <MaterialCommunityIcons name='email-multiple-outline'
            style={{
              position: 'absolute',
              left: rS(290),
              top: Vs(263),
              fontSize: 14
            }} />
        </View>

        <View
          style={{
            height: Vs(47),
            width: rS(300),
            color: 'white',
            backgroundColor: 'red',
            marginLeft: 19,
            marginTop: Vs(250),
            borderRadius: 5,
          }}>

          <TouchableOpacity >
            <Text
              style={{
                fontFamily: 'serif',
                color: 'white',
                fontSize: Ms(23),
                fontWeight: 'bold',
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: Vs(7),
              }} onPress={handleSubmit}>Inscription</Text></TouchableOpacity>
        </View>

        <Text style={{
          textAlign: 'center',
          marginLeft: 10,
          marginTop: 7,
          fontFamily:'serif',
          fontWeight: 'bold',
          fontSize: Ms(14)
        }}>Tout droit réservés {'\n'}provited byThingsApp{'\n'} copyright@2024
        </Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    fontFamily:'serif',
    backgroundColor: 'white',
    position: 'relative',
    top: Vs(51),
    fontSize: 17,
    fontWeight: 'bold',
    margin: 10,
    paddingLeft: rS(12),
    marginHorizontal: 20,
    height: Vs(46),
    width: rS(300),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    shadowOpacity: 0.07,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },

    button: {
      color: 'white',
    },
    placeholder: {
      marginLeft: 40,
    }
  }
});

export default InscriptionStudents;
