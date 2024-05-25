import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons/build/Icons';
import { Ms, Vs, rS } from '../Responsive/responsive';

const InscriptionStudents = () => {
  const [selectedValue, setSelectedValue] = useState();

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
          <TextInput style={styles.container} placeholder='Nom'/>
          <Entypo style={{ position: 'absolute', left: rS(290), top: Vs(77), fontSize: 14 }} name='user' />
          <TextInput style={styles.container} placeholder='Prénom' />
          <Entypo style={{ position: 'absolute', left: rS(290), top: Vs(144), fontSize: 14 }} name='user' />
          <View style={styles.container}>
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
              <Picker.Item style={{fontFamily:'serif'}} label="Choix du filière" value="Choix du filière" />
              <Picker.Item label="AI" value="AI" />
              <Picker.Item label="ISI" value="ISI" />
              <Picker.Item label="MIL" value="MIL" />
              <Picker.Item label="CS" value="CS" />
            </Picker>
          </View>
          <TextInput style={styles.container} placeholder='E_mail' />
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
              }}>Inscription</Text></TouchableOpacity>
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