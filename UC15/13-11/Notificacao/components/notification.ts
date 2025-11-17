import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";

export function start() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
}

export async function schedule(corpo: string, tempo: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Lembrete!",
      body: corpo,
      sound: "plimplom.mp3",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: Number(tempo),
    },
  });
}

export async function pedirPermissao(): Promise<void> {
  const { status } = await Notifications.getPermissionsAsync();

  if (status !== "granted") {
    const { status: novoStatus } =
      await Notifications.requestPermissionsAsync();

    if (novoStatus !== "granted") {
      Alert.alert("Permissão negada", "O app não poderá enviar notificações.");
      return;
    }
  }

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      sound: "default",
    });
  }
}
