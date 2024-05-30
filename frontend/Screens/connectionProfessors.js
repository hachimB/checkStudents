import React from 'react';
import { View, Text, ImageBackground, TextInput, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import DrawerProfessors from './drawerProfessors';


const ConnectionStudents = () => {
  const navigation = useNavigation();
  const navigateToHomeProfessors = () => {
    navigation.navigate('DrawerProfessors'); 
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold'}}>Connection Students Screen</Text>
      <ImageBackground source={require('../Assets/connectionProfessors.png')} style={styles.backgroundStudent}>
        <View style={styles.overlay}>
          <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#ccc" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />
          <TouchableOpacity onPress={navigateToHomeProfessors} style={styles.button}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStudent: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2,
    // borderColor:'red',
  },
  overlay: {
    flex: 1,
    height:'100%',
    width:width,
    position: 'absolute',
    padding: 20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
 
  },
  input: {
    width: 300,
    height: 40,
    borderWidth:2,
    borderColor:'white',
    marginBottom: 10,
    fontWeight:'bold',
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
    // fontFamily:'serif'
  },
});

export default ConnectionStudents;
