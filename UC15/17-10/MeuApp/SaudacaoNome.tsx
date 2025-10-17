import { StyleSheet, Text } from "react-native";
import React from "react";

export default function SaudacaoNome(texto: { nome: string }) {
  return <Text style={styles.saudacao}>Opa, {texto.nome}!</Text>;
}

const styles = StyleSheet.create({ saudacao: { color: "blue", fontSize: 24 } });
