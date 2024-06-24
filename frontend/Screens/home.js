import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CarouselCustom from './CarouselCustom';



const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../Assets/checkStudents.jpg')}  style={{width:'100%',height:350,}} />
            <View style={{flex:1, justifyContent:'flex-end'}}>
                <View style={{alignSelf:'flex-end',flexDirection: 'row', gap: 30 ,marginTop:10, marginHorizontal: 10}}>
                    <TouchableOpacity 
                    style={{ justifyContent:'center',alignItems:'center',height: 40, width: 90, borderRadius:5, borderWidth: 1, borderColor: '#D9D9D9'}}
                    onPress={() => navigation.navigate('StatusInscription')}>
                        <Text> Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('StatusConnection')}
                    style={{justifyContent:'center',alignItems:'center',height: 40, width: 90, borderRadius:5, borderWidth: 1, borderColor: '#D9D9D9'
                    
                    }}>
                        <Text> Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <CarouselCustom />
            </View>
         
            <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',  alignItems:'center'}}>
                <Text>Tous Droits Reservés</Text>
                <Text>Provided By ThingsApp</Text>
                <Text>copyright 2024</Text>
            </View>   
        </SafeAreaView>

    )
}

export default Home ;