import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ buttonColorText,buttonText, setWidth, handleonPress, buttonColor, pressedButtoncolor }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedButtoncolor : buttonColor,
          width: setWidth,
        },
        styles.button,
      ]}
      onPress={handleonPress}
    >
      {/* pressable button */}
      <Text style={({color:buttonColorText})}>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
