import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo! </Text>
      <Image
        source={require("./assets/Anonymous_emblem.png")}
        style={styles.img}
      ></Image>
      <View style={styles.form}>
        <Text style={styles.text}>Nome</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" />

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="******"
          secureTextEntry={true}
          keyboardType="visible-password"
        />
        <TouchableOpacity
          onPress={() => {
            alert("Formulário enviado!");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: { color: "white", fontWeight: "bold" },
  img: { width: 150, height: 150 },
  form: {
    width: 300,
    borderRadius: 25,
    borderStyle: "solid",
    borderColor: "grey",
    backgroundColor: "#303030",
    borderWidth: 1,
    padding: 10,
    gap: 7,
  },
  input: {
    borderRadius: 25,
    borderStyle: "solid",
    borderColor: "black",
    color: "white",
    borderWidth: 2,
    padding: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    marginTop: 10,
    padding: 7,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});
