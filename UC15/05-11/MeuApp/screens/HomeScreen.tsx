import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button as ButtonNav } from "@react-navigation/elements";
import { HomeScreenProps } from "../interfaces/NavigationInterfaces";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ route, navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{route.name}Screen</Text>
      <ButtonNav
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        About
      </ButtonNav>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
