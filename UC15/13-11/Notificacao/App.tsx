import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  Platform,
  Alert,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
// Importa o módulo de notificações do Expo
import * as Notifications from "expo-notifications";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

let notificationListenerRegistered = false;
/* 
-------------------------------------------------------
 CONFIGURAÇÃO GLOBAL DAS NOTIFICAÇÕES
-------------------------------------------------------
Aqui definimos como o app deve reagir quando uma notificação 
for recebida enquanto o aplicativo está ABERTO.
*/
if (!notificationListenerRegistered) {
  notificationListenerRegistered = true;

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      // Reproduz som de notificação (se houver)
      shouldPlaySound: true,
      // Não altera o "badge" do app (aquele número no ícone)
      shouldSetBadge: false,
      // Mostra a notificação na parte superior (Android/iOS)
      shouldShowBanner: true,
      // Exibe na Central de Notificações (iOS 15+)
      shouldShowList: true,
    }),
  });
}

interface Lembrete {
  corpo: string;
  intervalo: Date;
}
/* 
-------------------------------------------------------
 COMPONENTE PRINCIPAL DO APP
-------------------------------------------------------
É o componente funcional padrão do React Native.
*/
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
  /* 
  useEffect: executa ações assim que o componente é montado.
  Aqui, usamos ele para:
   - Pedir permissão de notificação
   - Criar um "listener" que reage quando uma notificação é recebida
  */
  useEffect(() => {
    // Chama a função que solicita permissão do usuário
    pedirPermissao();

    // Cria um listener que "ouve" quando uma notificação é recebida
    const subscription: Notifications.EventSubscription =
      Notifications.addNotificationReceivedListener((notification) => {
        // Apenas exibe no console a notificação recebida
        console.log(
          "Notificação recebida:",
          notification.request.content.title,
          notification.request.content.body
        );
      });

    // Remove o listener quando o componente for desmontado
    return () => subscription.remove();
  }, []);

  /* 
  Função para ENVIAR uma notificação local.
  É chamada quando o usuário aperta o botão na tela.
  */
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

    await Notifications.scheduleNotificationAsync({
      // Conteúdo da notificação (título, corpo, som, etc.)
      content: {
        title: "Lembrete!", // Título da notificação
        body: lembrete, // Texto que aparece
        sound: "plimplom.mp3", // Toca som (no iOS)
      },
      // Define o "gatilho" (quando ela será exibida)
      trigger: {
        // Tipo do agendamento: intervalo de tempo
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        // Quantos segundos esperar até exibir (aqui: 3 segundos)
        seconds: Number(intervalo),
      },
    });

    lembretes.push({
      corpo: lembrete,
      intervalo: new Date(Date.now() + Number(intervalo) * 1000),
    });
    setLembrete("");
    setIntervalo("");
  }

  /* 
  JSX — parte visual do aplicativo.
  Mostra um título e um botão para disparar a notificação.
  */
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
            renderItem={({ item, index }) => {
              let sec = Math.floor(
                (item.intervalo.getTime() - Date.now()) / 1000
              );
              if (sec <= 0) {
                lembretes.splice(index, 1);
                return <></>;
              }
              return (
                <View>
                  <Text>Alerta {index}</Text>
                  <Text>Texto:{item.corpo}</Text>
                  <Text>
                    Quando vai tocar:
                    {sec}
                    segundos
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

/* 
-------------------------------------------------------
 FUNÇÃO DE PERMISSÃO PARA NOTIFICAÇÕES
-------------------------------------------------------
Toda notificação precisa da autorização do usuário.
Essa função pede e verifica essa permissão.
*/
async function pedirPermissao(): Promise<void> {
  // Verifica o status atual da permissão
  const { status } = await Notifications.getPermissionsAsync();

  // Se ainda não está concedida...
  if (status !== "granted") {
    // Pede permissão ao usuário
    const { status: novoStatus } =
      await Notifications.requestPermissionsAsync();

    // Se o usuário negar, mostra um alerta
    if (novoStatus !== "granted") {
      Alert.alert("Permissão negada", "O app não poderá enviar notificações.");
      return;
    }
  }

  /* 
  No Android, é OBRIGATÓRIO criar um "canal de notificação".
  Esse canal define regras como prioridade, som e categoria.
  */
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default", // Nome interno do canal
      importance: Notifications.AndroidImportance.MAX, // Prioridade máxima
      sound: "default", // Usa o som padrão do sistema (deve ser string)
    });
  }
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
