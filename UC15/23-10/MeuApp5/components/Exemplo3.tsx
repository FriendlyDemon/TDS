import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function Exemplo3() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  // ✅ Executa apenas quando o contador mudar
  useEffect(() => {
    console.log("O contador mudou:", contador);
  }, [contador]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Contador: {contador}</Text>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
      <Text style={{ fontSize: 20 }}>Contador: {contador2}</Text>
      <Button title="Aumentar" onPress={() => setContador2(contador2 + 1)} />
    </View>
  );
}
