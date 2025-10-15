import { StatusBar } from "expo-status-bar";
import { StatusBar as test } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  test.setHidden(true, "slide");
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Tralala</Text>
          <Image
            source={require("./assets/images.webp")}
            style={styles.image}
          />
          <Button
            title="Clique"
            onPress={() => {
              alert("Clicou");
            }}
          ></Button>
          <Image
            source={{
              uri: "https://static.wikia.nocookie.net/sayhello-disney/images/c/cc/A_Bug%27s_Life.jpg/revision/latest?cb=20210802193136",
            }}
            style={styles.image}
          />

          <TouchableOpacity
            onPress={() => alert("Alerta Customizado!")}
            style={{ backgroundColor: "#007AFF", padding: 10, borderRadius: 5 }}
          >
            <Text style={{ color: "#fff" }}>Botão Customizado</Text>
          </TouchableOpacity>

          <StatusBar hidden style="auto" />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontWeight: "bold",
  },
  image: { width: 300, height: 550 },
});
