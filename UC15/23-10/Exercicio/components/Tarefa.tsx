import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Tarefa(props: { title: string; id: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>Tarefa {props.id}:</Text>
      <Text style={styles.tarefa}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    boxShadow:"3px 3px 5px #00000050"
  },
  id: { fontWeight: "bold" },
  tarefa: {padding:5},
});
