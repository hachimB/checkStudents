import React from 'react';
import uuid from 'react-native-uuid';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const HomeProfessors = () => {
  const currentDate = new Date().toLocaleDateString();
  const users = [
    { id: uuid.v4(), name: 'Babacar ISI 3annee', imageUrl: require('../images/coffee6.jpg') },
    { id: uuid.v4(), name: 'Hervé ISI 3annee', imageUrl: require('../images/coffee5.jpg') },
    { id: uuid.v4(), name: 'Amine ISI 3annee', imageUrl: require('../images/coffee5.jpg') },
    { id: uuid.v4(), name: 'Astrel ISI 3annee', imageUrl: require('../images/coffee5.jpg') },
    { id: uuid.v4(), name: 'Malick GI 1annee', imageUrl: require('../images/coffee5.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/coffee6.jpg')} style={styles.headerImage} />
        <Calendar style={styles.calendar}  theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
        
        />
        {/* <TextInput placeholder="Search" style={styles.searchBar} /> */}
      </View>
      <View style={styles.datePicker}>
        <Text style={{ fontSize: 20, fontFamily:'serif',}}>{currentDate}</Text>
      </View>
      <View style={styles.outerBorder}>
      <View style={styles.momentSection}>
        <Text style={{marginBottom:30, color:'black', fontSize: 20, fontFamily:'serif', borderBlockColor:'black'}}>AT THE MOMENT</Text>
        {users.length >= 1 ? <Text style={{color:'black', fontSize: 20, fontFamily:'serif'}}>{"The number of students in the classroom : ".toUpperCase()} {users.length}</Text> : <Text style={{color:'crimson'}}>{"THERE IS NO ANY STUDENT CONNECTED"}</Text>}
        <FlatList
          data={users}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.user}>
              <Image source={item.imageUrl} style={styles.userImage} />
              <Text style={{ fontSize: 15, fontFamily:'serif',}}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      </View>
      <TouchableOpacity style={styles.adminButton}>
        <Text>GENERATE ATTENDANCE LIST</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
      <TouchableOpacity style={styles.adminButton}>
        <Text>BUTTON 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.adminButton}>
        <Text>BUTTON 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.adminButton}>
        <Text>BUTTON 3</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
};
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerImage: {
    width: screenWidth - 30,
    height: 150,
    resizeMode: 'cover',
  },
  searchBar: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginTop: -75,
  },
  datePicker: {
    marginVertical: 16,
  },
  momentSection: {
    marginVertical: 16,
  },
  user: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  userImage: {
    margin: 50,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  adminButton: {
    margin: 20,
    marginBottom: 90,
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 150,
  },
  calendar: {
    margin: 20,
    width: screenWidth - 30,
    height: 350,
    borderWidth: 1, // Add a border
    borderColor: '#ccc', // Set the border color
    borderRadius: 10,
    // backgroundColor: 'gray',
  },
  outerBorder: {
    backgroundColor:'gray',
    borderWidth: 1,
    marginRight: 10,
    borderColor: 'gray',
    paddingLeft: 10,
    width: screenWidth - 30,
    margin: 20,
  },
  footer: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Add space between the buttons
    marginBottom: -10, // Add some margin at the bottom
  },
});

export default HomeProfessors;

