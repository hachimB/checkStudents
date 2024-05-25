import * as React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import uuid from 'react-native-uuid';


const data = [
  { id: uuid.v4(), image: require('../images/coffee1.jpg'), name: 'Babacar', program: ' ISI '},
  { id: uuid.v4(), image: require('../images/coffee2.jpg'), name: 'Franck', program: ' ISI '},
  { id: uuid.v4(), image: require('../images/coffee3.jpg'), name: 'Astrel', program: 'ISI'},
  { id: uuid.v4(), image: require('../images/coffee4.jpg') , name: 'Hachim', program: 'ISI'},
  // other data items...
];

const HomeProfessors = () => {
  return (
    <View>
    <Text>Welcome to the professors landing page</Text>
    </View>
  )
}
export default HomeProfessors;
