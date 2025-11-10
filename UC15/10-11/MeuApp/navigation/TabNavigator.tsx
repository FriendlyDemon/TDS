import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

export default function TabNavigator() {
  let tab = createBottomTabNavigator();
  return (
    <View>
      <Text>TabNavigator</Text>
    </View>
  );
}
