import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeProfessors from './homeProfessors';
import AllUsers from './allUsers';
import AllUsersConnected from './allUsersConnected';
import GradeStudents from './gradeStudents';
import DrawerHeader from './DrawerHeader';

const Drawer = createDrawerNavigator();

const DrawerProfessors = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerHeader {...props} />}>
      <Drawer.Screen
        name="HomeProfessors"
        component={HomeProfessors}
        options={{ headerTitle: '' }}
      />
      <Drawer.Screen
        name="AllUsersConnected"
        component={AllUsersConnected}
        options={{
          drawerIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="account-group" size={30} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="AllUsers"
        component={AllUsers}
        options={{
          drawerIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="account-group" size={30} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="GradeStudents"
        component={GradeStudents}
        options={{
          drawerIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="pencil" size={30} color="black" />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerProfessors;
