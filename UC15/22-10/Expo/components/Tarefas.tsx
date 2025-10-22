import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<string[]>([]);

  const [novaTarefa, setNovaTarefa] = useState<string>("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() == "") return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <Button title="Adicionar tarefa" onPress={adicionarTarefa} />
        <FlatList
          data={tarefas}
          keyExtractor={(index) => {
            return index.toString();
          }}
          renderItem={({ item, index }) => {
            return (
              <Text>
                {index + 1}. {item}
              </Text>
            );
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({ container: {}, input: {}, text: {} });
