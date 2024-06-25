import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStudents from './homeStudents';
import User from '../Screens/user'
import Calling from './calling';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStudents" component={HomeStudents} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Calling" component={Calling} />
    </Tab.Navigator>
  );
}

export default BottomNavigation