import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/FontAwesome5";
import Iconx from "@expo/vector-icons/FontAwesome";
import { styles } from "../styles/style";

export default function Multiplicacao() {
  const [num1, setNum1] = useState("1");
  const [num2, setNum2] = useState("1");

  function change1(text: string) {
    setNum1((prevState) => {
      let num = Number(text);
      if (prevState == "0" && text != "00" && text != "0.") {
        return (num + 0).toString();
      }
      if (text.trim() === "") {
        return "0";
      }
      if (!isNaN(num)) return text;
      return prevState;
    });
  }

  function change2(text: string) {
    setNum2((prevState) => {
      let num = Number(text);
      if (prevState == "0" && text != "00" && text != "0.") {
        return (num + 0).toString();
      }
      if (text.trim() === "") {
        return "0";
      }
      if (!isNaN(num)) return text;
      return prevState;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="numero"
        value={num1}
        onChangeText={change1}
        keyboardType="numeric"
      />
      <Iconx name="close" size={16} color="black" />
      <TextInput
        style={styles.input}
        placeholder="numero"
        value={num2}
        onChangeText={change2}
        keyboardType="numeric"
      />
      <Icon name="equals" size={15} color="black" />
      <Text>{Number(num1) * Number(num2)}</Text>
    </SafeAreaView>
  );
}
