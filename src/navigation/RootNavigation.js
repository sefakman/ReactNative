import React from 'react'
import AuthStack from './AuthStack'
import UserStack from './UserStack'
import { NavigationContainer } from '@react-navigation/native'
const RootNavigation = () => {
  const isAuth=false
  return (
      !isAuth ? <AuthStack/> : <UserStack/>

  )
}

export default RootNavigation
