import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'; // Doğru import
import { CustomButton, CustomTextInput } from '../components';

const SignupPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/signup.jpg')}
        style={styles.image}
      />

      <Text style={styles.welcome}>Sign Up</Text>

      <CustomTextInput
        title="Name"
        handlePlaceHolder="Enter Your Name"
        isSecureText={false}
        handleOnChangeText={setName}
        handleValue={name}
      />

      <CustomTextInput
        title="Email"
        handlePlaceHolder="Enter Your Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
      />

      <CustomTextInput
        title="Create Password"
        handlePlaceHolder="Enter Your Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
      />

      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        handleonPress={() => console.log(name, email, password)}
        buttonColor="blue"
        pressedButtoncolor="lightgray"
      buttonColorText='white'

      />
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={{ fontWeight: 'bold', marginTop: 20, }}>
          Already have an account? Login
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fed32b'
  },
 
  welcome: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    color:'black',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
});
