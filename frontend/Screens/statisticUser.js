import React from "react";
import { View ,Text ,Image, StyleSheet} from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const DiagrammeStudent = () => {
    const barData = [
        {
          value: 2.30,
          label: 'Lun',
          frontColor: '#4ABFF4',
          sideColor: '#23A7F3',
          topColor: '#92e6f6',
        },
        {
          value: 1.80,
          label: 'Mar',
          frontColor: '#79C3DB',
          sideColor: '#68BCD7',
          topColor: '#9FD4E5',
        },
        {
          value: 1.95,
          label: 'Mer',
          frontColor: '#28B2B3',
          sideColor: '#0FAAAB',
          topColor: '#66C9C9',
        },
        {
          value: 2.5,
          label: 'Jeu',
          frontColor: '#4ADDBA',
          sideColor: '#36D9B2',
          topColor: '#7DE7CE',
        },
        {
          value: 3.2,
          label: 'Ven',
          frontColor: '#91E3E3',
          sideColor: '#85E0E0',
          topColor: '#B0EAEB',
        },
        {
            value: 3.20,
            label: 'Sam',
            frontColor: '#91E3E3',
            sideColor: '#85E0E0',
            topColor: '#B0EAEB',
          },
    ]
    return (
        <SafeAreaView style={{flex:1,paddingTop:30,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',paddingLeft:10,}}>
          <Image source={require('../Assets/image6.jpg')} style={styles.imageProfil} />
          <View style={{paddingLeft:30,paddingTop:5}}>
            <Text>Nom : Reason </Text>
            <Text>Preom : Knowledge</Text>
            <Text>Filière : ISI</Text>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name="file-eye" size={20} color="#D33E43" />
              <Text>voir les notes</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:40,}}>
        <Text style={{paddingLeft:50,paddingBottom:20}}>Frequentation</Text>
            <BarChart
            showFractionalValue
            showYAxisIndices
            hideRules
            noOfSections={4}
            maxValue={6}
            data={barData}
            barWidth={25}
            stepValue={1}
            sideWidth={15}
            isThreeD 
            side="right"
            />
        </View>
        </SafeAreaView>
    );
}

const styles =StyleSheet.create({
  imageProfil:{
    width: 80,
    height: 80,
    borderRadius: 50,
  }
})


export default DiagrammeStudent;
