import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Exemplo6() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("3 segundos se passaram!");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>⏳ Esperando 3 segundos...</Text>
    </View>
  );
}
