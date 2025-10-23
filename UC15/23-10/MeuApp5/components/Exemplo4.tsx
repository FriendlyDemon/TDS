import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Exemplo4() {
  useEffect(() => {
    // Inicia um intervalo que executa a cada 2 segundos
    const intervalo = setInterval(() => {
      console.log("Executando a cada 2 segundos...");
    }, 2000);

    // 🧼 Função de limpeza: chamada quando o componente sai da tela
    return () => clearInterval(intervalo);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>⏱️ Intervalo ativo</Text>
    </View>
  );
}
