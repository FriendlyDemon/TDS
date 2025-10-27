import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import Tarefa from "./Tarefa";

export default function Lista() {
  const [tarefa, setTarefa] = useState<any[]>([]);
  const [mostrar, setMostrar] = useState(true);
  interface Tarefa {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  useEffect(() => {
    let listaAnterior: string = "[]";
    const buscarTarefas = async () => {
      if (mostrar) {
        try {
          console.log("Buscando tarefas...");
          const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );

          const lista: Tarefa[] = await resposta.json();

          const listaFiltrada: Tarefa[] = lista.filter((tarefa) => {
            return !tarefa.completed;
          });

          let listaString = JSON.stringify(listaFiltrada);

          if (listaString != listaAnterior) {
            setTarefa(listaFiltrada);
            if (listaAnterior != "[]") {
              Alert.alert("tarefas atualizadas");
            }
            listaAnterior = listaString;
          }
        } catch (e) {
          console.log("Error ao buscar tarefas", e);
        }
      }
    };

    buscarTarefas();
    const intervalo = setInterval(buscarTarefas, 10000);
    return () => clearInterval(intervalo);
  }, [mostrar]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flat}
          data={tarefa}
          renderItem={({ item }) => <Tarefa title={item.title} id={item.id} />}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setMostrar(!mostrar);
          }}
        >
          <Text>{mostrar ? "parar de atualizar" : "voltar a atualizar"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flat: {
    borderTopColor: "black",
    borderTopWidth: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  btn: {
    backgroundColor: "#ccc",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    padding: 5,
    margin: 5,
  },
});
