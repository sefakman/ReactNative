import { Image, StyleSheet, Platform, View,Text,TextInput, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import React,{useState} from 'react';
import Loading from '../components/Loading'

const LoginPage = ({navigation})=> {

  const [name,setName]=useState("");
  const [lastName,setlastName]=useState("");
  const [result,setresult]=useState("");
  const [isLoading, setisLoading] = useState(false)
  
  return (
    <View style={styles.container}> // View container yapısı demek

    <Image source={require('../../assets/images/login.png')} style={styles.image} />
      <Text style={styles.welcome}>Welcome {result}</Text>

      <Text style={styles.text}>Email</Text>
      <TextInput placeholder='Enter Your Email' style={styles.textInputStyle} onChangeText={setName} value={name}/>

      <Text style={styles.text}>Password</Text>
      <TextInput secureTextEntry={true} placeholder='Enter Your Password' style={styles.textInputStyle} onChangeText={setlastName} value={lastName} />

      <Pressable 
      style={({pressed})=>[{backgroundColor:pressed?"gray":'blue'},styles.button]} 
      onPress={()=>setisLoading(true)}> // pressable button
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable 
      style={({pressed})=>[{backgroundColor:pressed?"gray":'lightgrey',marginTop:50},styles.signupButton]} 
      onPress={()=>navigation.navigate('Signup')}> 
        <Text style={styles.buttonText}>SignUp</Text>
      </Pressable>
      {isLoading ? <Loading changeIsLoading={()=>setisLoading(false)} /> : null}
    </View>
  );
}
export default LoginPage;
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

  },
  image: {
    width:200,
    height:200

  },
  welcome:{
    fontWeight:'bold',
    fontSize:20,
    margin:20
  },
  text:{
    fontWeight:'bold'
  },
  signupButton:{
    width:'30%',
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  }
});
