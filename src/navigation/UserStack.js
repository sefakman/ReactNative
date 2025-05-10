import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Homepage,ProfilePage} from '../screens'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 
const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Homepage} />
    <Stack.Screen name="Profile" component={ProfilePage} />
  </Stack.Navigator>
  )
}

export default UserStack

const styles = StyleSheet.create({})