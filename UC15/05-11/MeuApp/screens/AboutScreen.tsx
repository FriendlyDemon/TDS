import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { AboutScreenProps } from "../interfaces/NavigationInterfaces";
import { SafeAreaView } from "react-native-safe-area-context";
import { ParamListBase } from "@react-navigation/native";

export default function AboutScreen({ route, navigation }: AboutScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{route.name}Screen</Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
      >
        Go Back
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
