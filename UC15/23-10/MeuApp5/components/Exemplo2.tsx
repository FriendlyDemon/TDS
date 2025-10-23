import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Exemplo2() {
  useEffect(() => {
    console.log("O componente apareceu na tela!");
  }, []); // <- array vazio = só na primeira vez

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>👋 Componente montado!</Text>
    </View>
  );
}