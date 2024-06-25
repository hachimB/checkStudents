import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const user = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View>
        <Text>user</Text>
        </View>
    </SafeAreaView>
  )
}

export default user

const styles = StyleSheet.create({})