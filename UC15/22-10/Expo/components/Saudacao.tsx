import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Saudacao() {
  const [nome, setNome] = useState<string>("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.text}>Olá{nome ? `, ${nome}!` : "!"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
  input: { width: "80%", height: 50, fontSize: 14, backgroundColor: "white" },
});
