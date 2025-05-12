import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { LoadingPage, CustomTextInput,CustomButton } from "../components";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setresult] = useState("");
  const [isLoading, setisLoading] = useState(false);

  return (
    <View style={styles.container}>
            <Text style={styles.welcome}>Welcome {result}</Text>

      {/* View container yapısı demek */}
      <Image
        source={require("../../assets/images/login.png")}
        style={styles.image}
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceHolder='Enter Your Email'
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceHolder='Enter Your Password'

      />

      <CustomButton
      buttonText='Login'
      setWidth='50%'
      handleonPress={() => setisLoading(true)}
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
        <LoadingPage changeIsLoading={() => setisLoading(false)} />
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
