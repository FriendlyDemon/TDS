import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import * as Notifications from "expo-notifications";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as functions from "./components/notification";

let notificationListenerRegistered = false;
if (!notificationListenerRegistered) {
  notificationListenerRegistered = true;

  functions.start();
}

interface Lembrete {
  corpo: string;
  intervalo: Date;
}
export default function App() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);
  const [lembrete, setLembrete] = useState<string>("");
  const [intervalo, setIntervalo] = useState<string>("");

  function change(text: string) {
    setIntervalo((prevState) => {
      let num = Number(text);
      if (prevState == "0" && text != "00" && text != "0.") {
        return (num + 0).toString();
      }
      if (text.trim() === "") {
        return "0";
      }
      if (!isNaN(num)) return text;
      return prevState;
    });
  }
  useEffect(() => {
    functions.pedirPermissao();

    const subscription: Notifications.EventSubscription =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(
          "Notificação recebida:",
          notification.request.content.title,
          notification.request.content.body
        );
      });

    return () => subscription.remove();
  }, []);

  async function enviarNotificacao() {
    if (lembrete == "") {
      Alert.alert("lembrete vazio");
      return;
    }
    if (Number(intervalo) < 3) {
      Alert.alert(
        "intervalo muito curto",
        "intervalo não deve ser menor que 3s"
      );
      return;
    }

    await functions.schedule(lembrete, intervalo);

    setLembretes((prev) => [
      ...prev,
      {
        corpo: lembrete,
        intervalo: new Date(Date.now() + Number(intervalo) * 1000),
      },
    ]);
    setLembrete("");
    setIntervalo("");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>texto do lembrete:</Text>
        <TextInput
          style={styles.input}
          value={lembrete}
          onChangeText={setLembrete}
        />
        <Text style={styles.title}>intervalo em segundos:</Text>
        <TextInput
          style={styles.input}
          value={intervalo}
          onChangeText={change}
          keyboardType="numeric"
        />
        <Button title="Enviar Notificação" onPress={enviarNotificacao} />
        <Button
          title="cancelar todas Notificações"
          onPress={async () => {
            await Notifications.cancelAllScheduledNotificationsAsync();
            setLembretes([]);
            Alert.alert("Cancelado", "Todos os lembretes foram removidos.");
          }}
        />
        <View style={styles.container}>
          <FlatList
            data={lembretes}
            keyExtractor={(item) => {
              return item.intervalo.getTime().toString();
            }}
            renderItem={({ item, index }) => {
              if (item.intervalo.getTime() < Date.now()) {
                return <></>;
              }
              return (
                <View>
                  <Text>Alerta {index}</Text>
                  <Text>Texto:{item.corpo}</Text>
                  <Text>
                    Quando vai tocar: {"\n"}
                    {item.intervalo.toUTCString()}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
    gap: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#00ddff30",
    borderRadius: 50,
    width: "50%",
    textAlign: "center",
  },
});
