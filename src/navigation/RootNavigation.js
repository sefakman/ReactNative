import React from 'react'
import AuthStack from './AuthStack'
import UserStack from './UserStack'
import { useSelector } from 'react-redux'
import app from '../../firebaseConfig'



const RootNavigation = () => {
  const {isAuth} = useSelector((state)=>state.user)
  return (
      !isAuth ? <AuthStack/> : <UserStack/>

  )
}

export default RootNavigation
