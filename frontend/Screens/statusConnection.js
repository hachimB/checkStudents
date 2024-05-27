import React from 'react';
import { View, Text, ImageBackground, TextInput, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const ConnectionStudents = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Connection Students Screen</Text>
      <ImageBackground source={require('../Assets/connectionStudents.png')} style={styles.backgroundStudent}>
        <View style={styles.overlay}>
          <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#ccc" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
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
  },
  overlay: {
    position: 'absolute',
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#1E90FF',
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
