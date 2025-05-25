import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";


import React, { useState } from "react";
import { LoadingPage, CustomTextInput,CustomButton } from "../components";
import { useSelector,useDispatch } from "react-redux";
import { setIsLoading } from "../redux/userSlice";
import { login } from "../redux/userSlice";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoading, setisLoading] = useState(false);


// userSlice içerisindeki verilerin okunması
const { isLoading}=useSelector((state)=>state.user)

// userSlice içerisindeki reducer yapılarını kullanma veya geri döndürme
const dispatch=useDispatch();


// yukarıda obje halinde alındı ama tek almak da mümkün
// const{email}=useSelector((state)=>state.user.email)

  return (
    <View style={styles.container}>
            <Text style={styles.welcome}>Welcome</Text>

      {/* View container yapısı demek */}
      <Image
        source={require("../../assets/images/login.png")}
        style={styles.image}
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text)=>setEmail(text)}
        handleValue={email}
        handlePlaceHolder='Enter Your Email'
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password)=>setPassword(password)}
        handleValue={password}
        handlePlaceHolder='Enter Your Password'

      />

      <CustomButton
      buttonText='Login'
      setWidth='50%'
      handleonPress={()=>dispatch(login({email,password}))}
      buttonColor='blue'
      pressedButtoncolor='gray'
      buttonColorText='white'
      />
     
     <CustomButton
      buttonText='SignUp'
      setWidth='30%'
      handleonPress={() => navigation.navigate("Signup")}
      buttonColor='#fed32b'
      pressedButtoncolor='lightgray'
      buttonColorText='black'

      />


      
      {isLoading ? (
        <LoadingPage changeIsLoading={()=>dispatch(setIsLoading(false))} />
      ) : null}
    </View>
  );
};
export default LoginPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    width: 200,
    height: 200,
    marginBottom:30
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
  },
  text: {
    fontWeight: "bold",
  },
  signupButton: {
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
 
});
