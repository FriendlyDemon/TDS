import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

export default function StackNavigation() {
  let stack = createNativeStackNavigator();
  return (
    <View>
      <Text>StackNavigation</Text>
    </View>
  );
}
