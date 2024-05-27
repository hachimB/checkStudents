import React from 'react';
import { StyleSheet ,View ,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeProfessors from './homeProfessors';
import AllUsers from './allUsers';
import AllUsersConnected from './allUsersConnected';
import GradeStudents from './gradeStudents';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Drawer = createDrawerNavigator();

const DrawerProfessors = () => {
  return (
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
            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 20, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
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
          <View style={{ backgroundColor: '#D9D9D9', borderRadius: 20, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="pencil" size={30} color="black" />
          </View>
        ),
      }}
    />
    </Drawer.Navigator>
  );
}

export default DrawerProfessors;
