import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Tarefa from "./Tarefa";

export default function Lista() {
  const [tarefa, setTarefa] = useState<any[]>([]);

  function comparaTarefa(a: any, b: any) {
    return a.id == b.id && a.title == b.title && a.completed == b.completed;
  }

  function comparaLista(a: any[], b: any[]) {
    if (a.length != b.length) return false;
    return a.every((item, i) => comparaTarefa(item, b[i]));
  }

  useEffect(() => {
    const buscarTarefas = async () => {
      try {
        console.log("Buscando tarefas...");
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        const lista: any[] = await resposta.json();
        const listaFiltrada = lista.filter((tarefa) => {
          return !tarefa.completed;
        });

        if (!comparaLista(listaFiltrada, tarefa)) {
          setTarefa(listaFiltrada);
          console.log("Atualizando tarefas");
        }
      } catch (e) {
        console.log("Error ao buscar tarefas", e);
      }
    };

    buscarTarefas();
    const intervalo = setInterval(buscarTarefas, 10000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <FlatList
      data={tarefa}
      renderItem={({ item }) => <Tarefa title={item.title} id={item.id} />}
    />
  );
}
