import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Posts from "./components/Posts";
import posts from "./assets/Posts.json";

const images: Record<string, any> = {
  test: require("./assets/icon.png"),
  peter: require("./assets/peter turbo.webp"),
  fulgrim: require("./assets/fulgrim.jpg"),
  henrique: require("./assets/eu.png"),
  khan: require("./assets/khan.jpg"),
  dominus: require("./assets/Dominus.jpg"),
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header
          img={require("./assets/peter turbo.webp")}
          name="Perter Turbo"
        />
        <FlatList
          style={{ width: "100%" }}
          data={posts}
          renderItem={({ item }) => (
            <Posts post={item} img={images[item.img]} />
          )}
        ></FlatList>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202030",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
