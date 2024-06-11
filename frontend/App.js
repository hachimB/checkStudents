import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeStudents from './Screens/homeStudents';
import HomeProfessors from './Screens/homeProfessors';
import ConnectionProfessors from './Screens/connectionProfessors';
import ConnectionStudents from './Screens/connectionStudents';
import InscriptionStudents from './Screens/inscriptionStudents';
import InscriptionProfessors from './Screens/inscriptionProfessors';
import UsersDetails from './Screens/usersDetails';
import AllUsers from './Screens/allUsers';
import AllUsersConnected from './Screens/allUsersConnected';
import StatusConnection from './Screens/statusConnection';
import DrawerProfessors from './Screens/drawerProfessors';
import Home from './Screens/home';
import SignUp from "./Screens/Essai";
import AccueilTest from './Screens/AccueilTest'




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="StatusConnection" component={StatusConnection} />
        <Stack.Screen name="AccueilTest" component={AccueilTest} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} options={{headerShown : false}}  />
        <Stack.Screen name="HomeStudents" component={HomeStudents} />
        <Stack.Screen name="HomeProfessors" component={HomeProfessors} />
        <Stack.Screen name="ConnectionStudents" component={ConnectionStudents} />
        <Stack.Screen name="ConnectionProfessors" component={ConnectionProfessors} />
        <Stack.Screen name="InscriptionStudents" component={InscriptionStudents} />
        <Stack.Screen name="InscriptionProfessors" component={InscriptionProfessors} />
        <Stack.Screen name="UsersDetails" component={UsersDetails} />
        <Stack.Screen name="AllUsers" component={AllUsers} />
        <Stack.Screen name="AllUsersConnected" component={AllUsersConnected} />
        <Stack.Screen name="DrawerProfessors" component={DrawerProfessors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
