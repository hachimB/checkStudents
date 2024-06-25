import React from 'react';
import { View, Text,  } from 'react-native';
import ConnectionStudents from './connectionStudents';
import ConnectionProfessors from './connectionProfessors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarIndicator } from 'react-native-tab-view';
import InscriptionStudents from './inscriptionStudents';
import InscriptionProfessors from './inscriptionProfessors';

const Tab = createMaterialTopTabNavigator();
const StatusInscription = () => {
  return (
      <Tab.Navigator 
      screenOptions={{
        tabBarStyle: { backgroundColor: 'white' }, 
        tabBarIndicatorStyle: { backgroundColor: 'red' }, 
        tabBarActiveTintColor: 'black', 
        tabBarInactiveTintColor: 'black'
      }}
      
      >
        <Tab.Screen
        name="Inscription Students"
        component={InscriptionStudents}
        options={{headerShown :false}}
        />
        <Tab.Screen
         name="Inscription Professors"
          component={InscriptionProfessors}
          options={{headerShown :false}}
        />
      </Tab.Navigator>
  );
}

export default StatusInscription;