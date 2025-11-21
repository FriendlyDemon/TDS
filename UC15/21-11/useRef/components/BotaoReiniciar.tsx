import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function BotaoReiniciar(props: {
  randomNumber: React.RefObject<number>;
  tentativas: React.RefObject<number>;
  setInfo: React.Dispatch<React.SetStateAction<string[]>>;
  setPalpite: React.Dispatch<React.SetStateAction<string>>;
}) {
  function restart() {
    props.randomNumber.current = Math.floor(Math.random() * 99 + 1);
    props.tentativas.current = 10;
    props.setInfo([]);
    props.setPalpite("");
  }
  return (
    <TouchableOpacity style={styles.botao} onPress={restart}>
      <Text>Tentar de novo?</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    backgroundColor: "grey",
    padding: 3,
  },
});
