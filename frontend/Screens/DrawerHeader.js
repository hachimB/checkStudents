import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const DrawerHeader = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.header}>
      <View style={styles.profileCircle}>
        <Image source={require('../Assets/checkStudents.jpg')} style={styles.profileImage} />
      </View>
      <Text style={styles.text}>Faith Gaiciumia</Text>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const styles = StyleSheet.create({
  header: {    
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  profileCircle: {
    width: 100,
    height: 100,
    backgroundColor: "#12B886",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden', // Ensures the image is clipped to the container's bounds
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image covers the container without stretching
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default DrawerHeader;
