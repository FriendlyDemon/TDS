import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AboutScreenProps } from "../interfaces/NavigationInterfaces";

export default function AboutScreen({ route, navigation }: AboutScreenProps) {
  return (
    <View style={styles.container}>
      <Text>{route.name}Screen</Text>
      <Button
        title="Profile"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
