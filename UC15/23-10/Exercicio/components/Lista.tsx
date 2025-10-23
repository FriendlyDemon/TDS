import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default async function Lista() {
  const [tarefa, setTarefa] = useState<any>();

  useEffect(() => {
    const dakka = async () => {
      let resposta = await fetch("https://jsonplaceholder.typicode.com/todos");

      let lista: any[] = await resposta.json();
      for (const element of lista) {
        if(element.completed){element}
      }
    };
  }, tarefa);

  return <FlatList data={} />;
}

const styles = StyleSheet.create({});
