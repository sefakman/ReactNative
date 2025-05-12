import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({title,isSecureText,handleOnChangeText,handleValue,handlePlaceHolder}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
        placeholder={handlePlaceHolder}
        secureTextEntry={isSecureText}
        style={styles.textInputStyle}
        onChangeText={handleOnChangeText}
        value={handleValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  textInputStyle: {
    borderBottomWidth: 0.5,
    borderColor: "blue",
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
  },
  inputBoxText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "black",
  },
});
