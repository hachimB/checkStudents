import React from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground, StyleSheet, TextInput, ScrollView ,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import ConnectionStudents from './connectionStudents' ;
// import ConnectionProfessors from './connectionProfessors';
import UsersDetails from './usersDetails';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const HomeProfessors = () => {

  const navigation = useNavigation();
  const navigateToUsersDetails = () => {
    navigation.navigate('UsersDetails'); 
  };

  return (
    <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
      <ImageBackground source={require('../Assets/logoHome.png')} style={styles.logoContainer} />
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.present}>
        <View style={{ justifyContent: 'space-between' ,flexDirection:'row',paddingHorizontal:6,paddingVertical:2 }}>
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <Text>AT THE MOMENT </Text>
            <Text>In classroom : 23</Text>
          </View>
          <Text>9H20</Text>
        </View>
        
        <View style={styles.scrollContainer}>
        <ScrollView horizontal>
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
          <Image source={require('../Assets/logoHome.png')} style={styles.imageScroll} />
        </ScrollView>
        </View>
      </View>
      <Text style={{textAlign:'center',fontSize:16,}}>More active</Text>
      
      <View style={{flexDirection:'row',alignSelf:'center',width:326,justifyContent:'center',gap:2,}}>
        <TouchableOpacity style={styles.card} onPress={navigateToUsersDetails}>
          <Image source={require('../Assets/logoHome.png')} style={styles.image} />
          <Text style={styles.text}>Reason</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={navigateToUsersDetails}>
          <Image source={require('../Assets/logoHome.png')} style={styles.image} />
          <Text style={styles.text}>Reason</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToUsersDetails} style={styles.card} >
          <Image source={require('../Assets/logoHome.png')} style={styles.image} />
          <Text style={styles.text}>Reason</Text>
        </TouchableOpacity>
        
      </View>

      <View style={{flexDirection:'row',marginTop:10,marginHorizontal:5}}>
        <Image source={require('../Assets/logoHome.png')}  style={styles.directiveImage} />
        <Image source={require('../Assets/logoHome.png')}  style={styles.directiveImage}/>
      </View>
        
      <View style={{flex:1,justifyContent:'flex-end'}}>
      <View style={{flexDirection:'row',alignItems:'center', borderWidth:1, borderColor:'#CCCCCC' ,height:45,justifyContent:'space-between',marginHorizontal:5,borderBottomLeftRadius:20,borderBottomRightRadius:20,paddingHorizontal:10,}}>
        <TouchableOpacity>
          <MaterialCommunityIcons name='home' size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name='home' size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name='home' size={20} />
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    height: 180,
  },
  imageScroll: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  present: {
    flexDirection:'column',
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    width: 326,
    height: 130,
    marginTop:10,
    alignSelf:'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor:'#D9D9D9',
    width: '90%', //300px
    height: 40,
    borderRadius:5,
    marginTop:-20
  },
  scrollContainer: {
    flex:1,
    // borderWidth:1,
    // borderColor:'green',
    marginTop:30,
  },
  card: {
    backgroundColor: '#fff',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
  },
  image: {
    width: 108,
    height: 70,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  directiveImage:{
    flex:1,
    height:80
  }
});

export default HomeProfessors;