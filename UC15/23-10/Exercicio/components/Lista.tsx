import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Tarefa from "./Tarefa";

export default function Lista() {
  const [tarefa, setTarefa] = useState<any[]>([]);
  let listaAnterior: string = "[]";

  useEffect(() => {
    const buscarTarefas = async () => {
      try {
        console.log("Buscando tarefas...");
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        const lista: any[] = await resposta.json();

        const listaFiltrada: any[] = lista.filter((tarefa) => {
          return !tarefa.completed;
        });

        let listaString = JSON.stringify(listaFiltrada);

        if (listaString != listaAnterior) {
          setTarefa(listaFiltrada);
          listaAnterior = listaString;
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
