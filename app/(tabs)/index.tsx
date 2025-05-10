import React from 'react'
import RootNavigation from '../../src/navigation/RootNavigation'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 

const index = () => {
  return <RootNavigation/>
}

export default index
