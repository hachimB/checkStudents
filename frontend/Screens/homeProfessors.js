import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground, StyleSheet, TextInput, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { db } from '../Config/firebaseConfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const HomeProfessors = () => {
  const [users, setUsers] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const navigation = useNavigation();

  useEffect(() => {
    const q = query(collection(db, 'students'), where('statusConnection', '==', 'online'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const usersList = [];
      querySnapshot.forEach((doc) => {
        usersList.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersList);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const navigateToUsersDetails = () => {
    navigation.navigate('UsersDetails');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../Assets/logoHome.png')} style={styles.logoContainer} />
      <View style={styles.timeContainer}>
        <TextInput style={styles.input} /> 
      </View>
      <View style={styles.present}>
        <View style={styles.presentHeader}>
          <View style={styles.presentTextContainer}>
            <Text>AT THE MOMENT</Text>
            <Text>In classroom: 23</Text>
          </View>
          <Text>Date: {currentTime}</Text>
        </View>

        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          {users.map((user) => (
            <View key={user.id} style={styles.containerProfile}>
              <Image source={{ uri: user.imageUrl }} style={styles.imageProfile} />
              <View style={styles.badge}></View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card} onPress={navigateToUsersDetails}>
          <Image source={require('../Assets/logoHome.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Reason</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={navigateToUsersDetails}>
          <Image source={require('../Assets/logoHome.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Reason</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToUsersDetails} style={styles.card}>
          <Image source={require('../Assets/logoHome.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Reason</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.directiveContainer}>
        <Image source={require('../Assets/logoHome.png')} style={styles.directiveImage} />
        <Image source={require('../Assets/logoHome.png')} style={styles.directiveImage} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <MaterialCommunityIcons name='home' size={scale(20)} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name='home' size={scale(20)} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name='home' size={scale(20)} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    width: '100%',
    height: verticalScale(200),
    resizeMode: 'cover',
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#D9D9D9',
    width: '90%',
    height: verticalScale(40),
    borderRadius: moderateScale(5),
    paddingHorizontal: scale(10),
  },
  present: {
    flexDirection: 'column',
    backgroundColor: '#D9D9D9',
    borderRadius: moderateScale(5),
    width: '90%',
    padding: scale(5),
    marginVertical: verticalScale(10),
    alignSelf: 'center',
  },
  presentHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: verticalScale(10),
  },
  presentTextContainer: {
    flexDirection: 'column',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerProfile: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: moderateScale(35),
    width: scale(50),
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(8),
    position: 'relative',
  },
  imageProfile: {
    width: scale(46), // Slightly smaller than containerProfile to fit within the border
    height: verticalScale(46),
    borderRadius: moderateScale(23),
  },
  badge: {
    position: 'absolute',
    width: scale(10),
    height: verticalScale(10),
    borderRadius: moderateScale(5),
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'green',
    bottom: 0,
    right: 0,
  },
  moreActiveText: {
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
  cardsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
  },
  card: {
    backgroundColor: '#fff',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
    width: scale(100),
  },
  cardImage: {
    width: scale(100),
    height: verticalScale(50),
  },
  cardText: {
    fontSize: moderateScale(16),
    color: '#333',
    marginTop: verticalScale(5),
  },
  directiveContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
    marginHorizontal: scale(5),
  },
  directiveImage: {
    flex: 1,
    height: verticalScale(80),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    height: verticalScale(45),
    justifyContent: 'space-between',
    marginHorizontal: scale(5),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    paddingHorizontal: scale(10),
  },
});

export default HomeProfessors;

