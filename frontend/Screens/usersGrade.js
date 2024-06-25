import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const cursorColor = '#E91212';

const UsersGrade = () => {
  const defaultValue1 = "18";
  const defaultValue2 = "16";
  const defaultValue3 = "15";
  const cursorColor = '#E91212';

  const navigation = useNavigation();
  const route = useRoute();

  const { profileImageUrl, firstName, lastName, programChoice } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        {profileImageUrl ? (
          <Image source={{ uri: profileImageUrl }} style={styles.image} />
        ) : (
          <Image source={require('../Assets/checkStudents.jpg')} style={styles.image} />
        )}
        <Text style={styles.text}>NOM : {lastName}</Text>
        <Text style={styles.text}>PRENOMS : {firstName}</Text>
        <Text style={styles.text}>Filière : {programChoice}</Text>
        <View style={styles.view}>
          <TextInput
            style={styles.textInput}
            cursorColor={cursorColor}
            keyboardType="numeric"
            defaultValue={defaultValue1}
          />
          <TextInput
            style={styles.textInput}
            cursorColor={cursorColor}
            keyboardType="numeric"
            defaultValue={defaultValue2}
          />
          <TextInput
            style={styles.textInput}
            cursorColor={cursorColor}
            keyboardType="numeric"
            defaultValue={defaultValue3}
          />
        </View>
      </View >
      <TouchableOpacity style={{ marginHorizontal: 20, borderRadius: 5, backgroundColor: cursorColor, alignItems:'center',
        justifyContent: 'center', height: 34, marginBottom: 50
      }} onPress={() => {navigation.navigate('DiagrammeStudent')}}>
        <Text style={{color: 'white'}}> VOIR LES DETAILS DE L'ETUDIANT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  containerProfile: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  view: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderTopColor: '#CCCCCC',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    borderRadius: 3,
    width: '80%',
    height: 40,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  navigate: {
    borderRadius: 5,
    backgroundColor: cursorColor,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default UsersGrade;
