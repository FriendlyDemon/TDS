import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTema } from "../context/TemaContext";
import { ComponenteSwitch } from "./ComponenteSwitch";

// =====================================
// Tela principal que usa o tema global
// =====================================
export const Tela = () => {
  const { temaEscuro } = useTema();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: temaEscuro ? "#333" : "#fff" },
      ]}
    >
      <Text style={[styles.texto, { color: temaEscuro ? "#fff" : "#000" }]}>
        Tema atual: {temaEscuro ? "Escuro" : "Claro"}
      </Text>
      <ComponenteSwitch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  texto: {
    fontSize: 20,
  },
});
