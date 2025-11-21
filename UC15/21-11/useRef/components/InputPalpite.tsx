import { StyleSheet, TextInput } from "react-native";
import React from "react";

export default function InputPalpite(props: {
  palpite: string;
  setPalpite: React.Dispatch<React.SetStateAction<string>>;
  reference: React.RefObject<TextInput | null>;
}) {
  return (
    <TextInput
      ref={props.reference}
      value={props.palpite}
      onChangeText={props.setPalpite}
      style={styles.input}
      keyboardType="numeric"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    width: 200,
    padding: 3,
    textAlign: "center",
  },
});
