import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProfileScreenProps } from "../interfaces/NavigationInterfaces";

export default function ProfileScreen({
  route,
  navigation,
}: ProfileScreenProps) {
  const { userId } = route.params;

  return (
    <View style={styles.container}>
      <Text>{route.name}Screen</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="About"
        onPress={() => {
          navigation.navigate("About");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
