import React from 'react';
import { View, Text,  } from 'react-native';
import ConnectionStudents from './connectionStudents';
import ConnectionProfessors from './connectionProfessors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();
const StatusConnection = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Tab.Navigator>
        <Tab.Screen
        name="ConnectionStudents"
        component={ConnectionStudents}
        options={{headerShown :false}}
        />
        <Tab.Screen
         name="ConnectionProfessor"
          component={ConnectionProfessors}
          options={{headerShown :false}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default StatusConnection;


