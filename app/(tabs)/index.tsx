import { Image, StyleSheet, Platform, View,Text,TextInput, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import React,{useState} from 'react';
export default function App() {

  const [name,setName]=useState("");
  const [lastName,setlastName]=useState("");
  const [result,setresult]=useState("");
  return (
    <View style={styles.container}>
      <Text>Welcome {result}</Text>

      <Text>Name</Text>
      <TextInput placeholder='Enter Your Name' style={styles.textInputStyle} onChangeText={setName} value={name}/>

      <Text>Last Name</Text>
      <TextInput placeholder='Enter Your Last Name' style={styles.textInputStyle} onChangeText={setlastName} value={lastName} />

      <Pressable style={({pressed})=>[{backgroundColor:pressed?"gray":'blue'},styles.button]} onPress={()=>setresult(name+" "+lastName)}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  textInputStyle: {
    borderWidth:1,
    width:'80%',
    height:50,
    borderRadius:10,
    marginVertical:10,
    textAlign:'center',
    color:'blue',
    fontWeight:'bold'
  },
  button: {
    width:'80%',
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',

  },
  buttonText: {
    fontWeight:'bold',
    color:'white'

  }
});
