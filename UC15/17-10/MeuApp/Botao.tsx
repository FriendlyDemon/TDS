import { Button, StyleSheet } from "react-native";
import React from "react";

export default function Botao(props: {
  title: string;
  aoPressionar: () => void;
}) {
  return <Button title={props.title} onPress={props.aoPressionar} />;
}

const styles = StyleSheet.create({});
