import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { useTema } from "../context/TemaContext";

// =====================================
// Botão que acessa o contexto e muda o tema
// =====================================
export const ComponenteSwitch = () => {
  const { temaEscuro, setTemaEscuro } = useTema(); // pegando os dados globais

  const fundo = temaEscuro ? "#333" : "#f5f5f5";
  const corTexto = temaEscuro ? "white" : "black";

  return (
    <View style={[styles.container, { backgroundColor: fundo }]}>
      <Text style={[styles.title, { color: corTexto }]}>
        Modo {temaEscuro ? "Escuro" : "Claro"}
      </Text>
      <Switch
        value={temaEscuro}
        onValueChange={setTemaEscuro}
        trackColor={{ false: "#ccc", true: "#666" }}
        thumbColor={temaEscuro ? "#fff" : "#333"}
      />
      <Text style={{ color: corTexto }}>
        {temaEscuro ? "Ativado" : "Desativado"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", paddingBottom: 20 },
  switch: { fontSize: 18 },
});
