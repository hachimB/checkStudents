import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const AllUsers = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <ScrollView>
        {[...Array(10)].map((_, index) => (
          <View key={index} style={styles.container}>
            <View style={[styles.itemContainer, styles.border]}>
              <TouchableOpacity style={styles.boutonprofile}>
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
