import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Posts from "./components/Posts";
import posts from "./assets/Posts.json";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header img={require("./assets/peter turbo.webp")} name="Perturabo" />
        <FlatList
          style={{ width: "100%" }}
          data={posts}
          renderItem={({ item }) => <Posts post={item} />}
        ></FlatList>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202030",//"#c0d0ff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
