import * as React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import uuid from 'react-native-uuid';


const data = [
  { id: uuid.v4(), image: require('../Assets/coffee1.jpg'), name: 'Babacar', program: ' ISI ', connected:true},
  { id: uuid.v4(), image: require('../Assets/coffee1.jpg'), name: 'Franck', program: ' ISI ', connected:true},
  { id: uuid.v4(), image: require('../Assets/coffee1.jpg'), name: 'Astrel', program: 'ISI', connected: true},
  { id: uuid.v4(), image: require('../Assets/coffee1.jpg'), name: 'Hachim', program: 'ISI', connected:false},
  { id: uuid.v4(), image: require('../Assets/coffee1.jpg'), name: 'Hachim', program: 'ISI', connected:false},
  { id: uuid.v4(), image: require('../Assets/coffee1.jpg'), name: 'Hachim', program: 'ISI', connected:false},
  // other data items...
];

const AllUsers = () => {
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Image source={item.image } style={{ width: 90, height: 90, borderRadius: 70, }} />
      <View style={{ flex: 1, borderRightWidth: 1, borderColor: '#ccc', paddingRight: 10 }}>
        <Text style={{ fontSize: 18, fontFamily:'serif', marginLeft: 10}}>{item.name}</Text>
        {item.connected && <Text style={{ color: 'green', marginLeft: 10 }}>Connected</Text>}
        {!item.connected && <Text style={{ color: 'red', marginLeft:10 }}>Not Connected</Text>}
      </View>
      {item.program.length > 0 && 
        <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'center', alignItems:'center' }}>
          <Text style={{fontFamily:"serif"}}>{item.program}</Text>
        </View>
      }
    </View>
  );

  return (
  <View>
  <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 2, borderColor: '#ccc' }}>
    <View style={{ flex: 1, borderRightWidth: 2,  borderColor: '#ccc', paddingRight: 90 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>STUDENTS</Text>
    </View>

    <View style={{ flex: 1, paddingLeft: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }}>PROGRAMS</Text>
    </View>
  </View>

  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id.toString()}
  />
</View>
  );
}
export default AllUsers;
