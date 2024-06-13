import React from "react";
import { View ,Text} from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";


const DiagrammeStudent = () => {
    const barData = [
        {
          value: 230,
          label: 'Lun',
          frontColor: '#4ABFF4',
          sideColor: '#23A7F3',
          topColor: '#92e6f6',
        },
        {
          value: 180,
          label: 'Mar',
          frontColor: '#79C3DB',
          sideColor: '#68BCD7',
          topColor: '#9FD4E5',
        },
        {
          value: 195,
          label: 'Mer',
          frontColor: '#28B2B3',
          sideColor: '#0FAAAB',
          topColor: '#66C9C9',
        },
        {
          value: 250,
          label: 'Jeu',
          frontColor: '#4ADDBA',
          sideColor: '#36D9B2',
          topColor: '#7DE7CE',
        },
        {
          value: 320,
          label: 'Ven',
          frontColor: '#91E3E3',
          sideColor: '#85E0E0',
          topColor: '#B0EAEB',
        },
        {
            value: 320,
            label: 'Sam',
            frontColor: '#91E3E3',
            sideColor: '#85E0E0',
            topColor: '#B0EAEB',
          },
    ]
    return (
        <SafeAreaView style={{flex:1,paddingTop:30,}}>
        <View>
            <BarChart
            showFractionalValue
            showYAxisIndices
            hideRules
            noOfSections={4}
            maxValue={400}
            data={barData}
            barWidth={25}
            sideWidth={15}
            isThreeD 
            side="right"
            />
        </View>
        <Text>Reason Knowledge One Days :) </Text>
        </SafeAreaView>
    );
}

export default DiagrammeStudent;
