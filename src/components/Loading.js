import { StyleSheet, Text, View,ActivityIndicator,Pressable } from 'react-native'
import React from 'react'

const Loading = ({changeIsLoading}) => {
  return (
    <View style={styles.container}>
        <Pressable 
        onPress={()=>changeIsLoading()}
        style={[{},styles.closeButtonContainer]}>
            <Text style={styles.closeButton}>X</Text>
        </Pressable>
        <ActivityIndicator size={'large'} color={'blue'} />
      <Text style={styles.loginText}>Loading ...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'lightblue',
        alignItems:'center',
        justifyContent:'center'
    },
    loginText:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
        marginTop:20
    },
    closeButton:{
color:'white',
fontWeight:'bold',
fontSize:16
    },
    closeButtonContainer:{
backgroundColor:'black',
width:50,
height:50,
borderRadius:50,
alignItems:'center',
justifyContent:'center',
position: 'absolute',
top:30,
right:10
    }
})