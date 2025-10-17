import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Saudacao() {
  return <Text style={styles.saudacao}>Opa!</Text>;
}

const styles = StyleSheet.create({ saudacao: { color: "blue", fontSize: 24 } });
