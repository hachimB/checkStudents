import React from 'react';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import io from 'socket.io-client';
import { StyleSheet, Text, View } from 'react-native';
const socket = io.connect('http://192.168.66.248:8000')


export default function App() {

  useEffect(() => {
    // Listen for disconnection event
    socket.on('disconnect', () => {
      console.log('A user is disconnected');
    });

    return () => {
      socket.off('disconnect');
    };
  }, []);


  return (
    <View style={styles.container}>
      <Text>Our project</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
