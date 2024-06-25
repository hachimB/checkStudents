import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import HomeStudents from './homeStudents';
import User from '../Screens/user';
import Calling from './calling';

const Tab = createBottomTabNavigator();

const BottomNavigationCustom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeStudents" 
        component={HomeStudents} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown:false,
        }} 
      />
      <Tab.Screen 
        name="Calling" 
        component={Calling} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('../Assets/increase.png')} 
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="User" 
        component={User} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default BottomNavigationCustom;
