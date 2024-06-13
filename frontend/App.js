import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AccueilTest from './Screens/AccueilTest';
import DiagrammeStudent  from "./Screens/statisticUser";
import AllUsers from './Screens/allUsers';
import AllUsersConnected from './Screens/allUsersConnected';
import ConnectionProfessors from './Screens/connectionProfessors';
import ConnectionStudents from './Screens/connectionStudents';
import DrawerProfessors from './Screens/drawerProfessors';
import Home from './Screens/home';
import HomeProfessors from './Screens/homeProfessors';
import HomeStudents from './Screens/homeStudents';
import InscriptionProfessors from './Screens/inscriptionProfessors';
import InscriptionStudents from './Screens/inscriptionStudents';
import SignUp from "./Screens/Essai";
import StatusConnection from './Screens/statusConnection';
import UsersDetails from './Screens/usersDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConnectionProfessors">
        <Stack.Screen name="AccueilTest" component={AccueilTest} />
        <Stack.Screen name="AllUsers" component={AllUsers} />
        <Stack.Screen name="AllUsersConnected" component={AllUsersConnected} />
        <Stack.Screen name="DiagrammeStudent" component={DiagrammeStudent} />
        <Stack.Screen name="ConnectionProfessors" component={ConnectionProfessors} />
        <Stack.Screen name="ConnectionStudents" component={ConnectionStudents} />
        <Stack.Screen name="DrawerProfessors" component={DrawerProfessors} options={{headerShown : false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown : false}}  />
        <Stack.Screen name="HomeProfessors" component={HomeProfessors} />
        <Stack.Screen name="HomeStudents" component={HomeStudents} />
        <Stack.Screen name="InscriptionProfessors" component={InscriptionProfessors} />
        <Stack.Screen name="InscriptionStudents" component={InscriptionStudents}  />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="StatusConnection" component={StatusConnection} />
        <Stack.Screen name="UsersDetails" component={UsersDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
