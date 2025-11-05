import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HomeScreenProps } from "../interfaces/NavigationInterfaces";

export default function HomeScreen({ route, navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>{route.name}Screen</Text>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate("Profile", { userId: 0 });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
