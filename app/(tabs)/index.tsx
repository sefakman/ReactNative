import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from '../../src/screens/LoginPage'
import SignupPage from '../../src/screens/SignupPage'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 

const index = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
      </Stack.Navigator>
      
  )
}

export default index

const styles = StyleSheet.create({})