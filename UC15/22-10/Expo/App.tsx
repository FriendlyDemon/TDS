import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Contador from "./components/Contador";
import Esconder from "./components/Esconder";
import Saudacao from "./components/Saudacao";
import ModoEscuroClaro from "./components/ModoEscuroClaro";
import Tarefas from "./components/Tarefas";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Contador />
      <Esconder />
      <Saudacao />
      <ModoEscuroClaro/>
      <Tarefas/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
