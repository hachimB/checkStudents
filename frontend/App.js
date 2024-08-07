import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AccueilTest from './Screens/AccueilTest';
import DiagrammeStudent  from "./Screens/statisticUser";
import AllUsers from './Screens/allUsers';
import AllUsersConnected from './Screens/allUsersConnected';
import BottomNavigationCustom from "./Screens/bottomNavigation";
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
import StatusInscription from "./Screens/statusInscription";
import UsersGrade from './Screens/usersGrade';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="AccueilTest" component={AccueilTest} />
        <Stack.Screen name="AllUsers" component={AllUsers} />
        <Stack.Screen name="AllUsersConnected" component={AllUsersConnected} />
        <Stack.Screen name="BottomNavigationCustom" options={{headerShown: false}} component={BottomNavigationCustom} />
        <Stack.Screen name="DiagrammeStudent" component={DiagrammeStudent} />
        <Stack.Screen name="ConnectionProfessors" component={ConnectionProfessors} />
        <Stack.Screen name="ConnectionStudents" component={ConnectionStudents} />
        <Stack.Screen name="DrawerProfessors" component={DrawerProfessors} options={{headerShown : false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown : false}}  />
        <Stack.Screen name="HomeProfessors" options={{ headerTitle: '' }} component={HomeProfessors} />
        <Stack.Screen name="HomeStudents" options={{ headerTitle: '', headerShown: false }}  component={HomeStudents} />
        <Stack.Screen name="InscriptionProfessors" component={InscriptionProfessors} />
        <Stack.Screen name="InscriptionStudents" component={InscriptionStudents}  />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="StatusConnection" options={{ headerTitle: '' }} component={StatusConnection} />
        <Stack.Screen name="StatusInscription" options={{ headerTitle: '' }} component={StatusInscription} />
        <Stack.Screen name="UsersGrade" options={{ headerTitle: '' }} component={UsersGrade} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
