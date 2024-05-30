import React from 'react';
<<<<<<< HEAD
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeProfessors from './homeProfessors';
// import AllUsers from './allUsers';
// import AllUsersConnected from './allUsersConnected';
// import GradeStudents from './gradeStudents';
// import DrawerHeader from './DrawerHeader';
=======
import { StyleSheet ,View ,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeProfessors from './homeProfessors';
import AllUsers from './allUsers';
import AllUsersConnected from './allUsersConnected';
import GradeStudents from './gradeStudents';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

>>>>>>> ea830d4bc3a7a60d6fdfb7a189e3c9db45ff9957

const Drawer = createDrawerNavigator();

const DrawerProfessors = () => {
  return (
<<<<<<< HEAD
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
=======
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeProfessors"
        component={HomeProfessors}
        options={{headerTitle :'',}}
      />
      <Drawer.Screen
       name="AllUsersConnected"
        component={AllUsersConnected}
        options={{
          drawerIcon: ({ color }) => (
            <View style={{ backgroundColor:'#D9D9D9' ,borderRadius:20,width:40,height:40,justifyContent:'center',alignItems:'center'}}>
>>>>>>> ea830d4bc3a7a60d6fdfb7a189e3c9db45ff9957
              <MaterialCommunityIcons name="account-group" size={30} color="black" />
            </View>
          ),
        }}
<<<<<<< HEAD
      />
      <Drawer.Screen
=======
        />
        <Drawer.Screen
>>>>>>> ea830d4bc3a7a60d6fdfb7a189e3c9db45ff9957
        name="AllUsers"
        component={AllUsers}
        options={{
          drawerIcon: ({ color }) => (
<<<<<<< HEAD
            <View style={styles.iconContainer}>
=======
            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 20, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
>>>>>>> ea830d4bc3a7a60d6fdfb7a189e3c9db45ff9957
              <MaterialCommunityIcons name="account-group" size={30} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
<<<<<<< HEAD
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
=======
      name="GradeStudents"
      component={GradeStudents}
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ backgroundColor: '#D9D9D9', borderRadius: 20, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="pencil" size={30} color="black" />
          </View>
        ),
      }}
    />
    </Drawer.Navigator>
  );
}
>>>>>>> ea830d4bc3a7a60d6fdfb7a189e3c9db45ff9957

export default DrawerProfessors;
