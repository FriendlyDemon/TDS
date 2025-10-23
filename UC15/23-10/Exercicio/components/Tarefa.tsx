import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default async function Tarefa(props: { userId: number; title: string }) {
  return (
    <View>
      <Text>{props.userId}</Text>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
