import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063e",
    borderRadius: 8,
    elevation: 4 , // 안드로이드에서만 호환됨
    shadowColor: 'black',
    shadowOffset: {
      width: 0,height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
});
