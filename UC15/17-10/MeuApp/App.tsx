import { StyleSheet, View } from "react-native";
import Botao from "./Botao";
import Perfil from "./Perfil";

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil nome="Thraka" idade={30}></Perfil>
      <Botao
        title="Clique"
        aoPressionar={() => {
          alert("Você Clicou");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
