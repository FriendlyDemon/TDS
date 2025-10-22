import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(0);
  return (
    <TouchableOpacity
      style={styles.opa}
      onPress={() => {
        setValor(valor + 1);
      }}
    >
      <Text style={styles.text}>{valor}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  opa: {
    width: 200,
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 25,
    padding: 10,
  },
});
