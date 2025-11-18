import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [user, setUser] = useState<{ nome: string; idade: number } | null>(
    null
  );
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");

  useEffect(() => {
    async function loadUser() {
      try {
        const storageUser = await AsyncStorage.getItem("@user");
        if (storageUser) setUser(JSON.parse(storageUser));
      } catch (e: any) {
        console.log("erro ao carregar usuario", e);
      }
    }
    loadUser();
  }, []);

  function isIdadeNumber() {
    let number = Number(idade);
    return !isNaN(number);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Olá {user?.nome}!</Text>
        <Text>Você tem {user?.idade} anos</Text>
      </View>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      ></TextInput>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
        placeholder="idade"
      ></TextInput>

      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          if (nome == "") {
            Alert.alert("nome não deve estar vazio");
          } else if (!isIdadeNumber()) {
            Alert.alert("idade deve ser um número");
          } else {
            let tempUser = { nome: nome, idade: Number(idade) };
            setUser(tempUser);
            try {
              await AsyncStorage.setItem(
                "@user",
                JSON.stringify(tempUser),
                () => {
                  console.log("Usuário salvo");
                }
              );
            } catch (e: any) {
              console.log("deu ruim");
            }
          }
        }}
      >
        <Text>salvar usuário</Text>
      </TouchableOpacity>
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
  },
  input: {
    borderBlockColor: "blue",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    width: 200,
    textAlign: "center",
    margin: 3,
  },
  btn: {
    borderBlockColor: "blue",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    width: 100,
    backgroundColor: "aqua",
    padding: 3,
    textAlign: "center",
    marginTop: 5,
  },
});
