import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const AllUsers = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView>
        <View style={styles.container}>
            <View style={[styles.itemContainer, styles.border]}>
                <Text>Nom du profile</Text>
            </View>
            <View style={[styles.itemContainer, styles.border, styles.textContainer]}>
              <Text>FILIERE DE L ETUDIANT</Text>
            </View>
        </View>

        {[...Array(10)].map((_, index) => (
          <View key={index} style={styles.container}>
            <View style={[styles.itemContainer, styles.border]}>
              <TouchableOpacity onPress={() => { navigation.navigate('UsersDetails')}} style={styles.boutonprofile}>
                <Image source={require('../Assets/checkStudents.jpg')} style={styles.profile} />
                <Text>Nom du profile</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.itemContainer, styles.border, styles.textContainer]}>
              <Text>FILIERE DE L ETUDIANT</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal:8,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  border: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  textContainer: {
    paddingLeft: 5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  boutonprofile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 5,
  },
});

export default AllUsers;
