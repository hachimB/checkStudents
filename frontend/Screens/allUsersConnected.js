import * as React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import uuid from 'react-native-uuid';


const data = [
  { id: uuid.v4(), image: require('../Assets/coffee1.jpg'), name: 'Babacar', program: ' ISI '},
  { id: uuid.v4(), image: require('../Assets/coffee2.jpg'), name: 'Franck', program: ' ISI '},
  { id: uuid.v4(), image: require('../Assets/coffee3.jpg'), name: 'Astrel', program: 'ISI'},
  { id: uuid.v4(), image: require('../Assets/coffee4.jpg') , name: 'Hachim', program: 'ISI'},
  // other data items...
];

const AllUsersConnected = () => {
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 2, borderColor: '#ccc' }}>
      <Image source={item.image } style={{ width: 90, height: 90, borderRadius: 70, }} />
      <View style={{ flex: 1, borderRightWidth: 2,  borderColor: '#ccc' }}>
        <Text style={{ fontSize: 18, fontFamily:'serif', paddingVertical:30, paddingLeft: 10}}>{item.name}</Text>
      </View>
      {item.program.length > 0 && 
        <View style={{ flex: 1, paddingLeft: 20, justifyContent: 'center', alignItems:'center', fontFamily:'serif'}}>
          <Text>{item.program}</Text>
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
export default AllUsersConnected;
