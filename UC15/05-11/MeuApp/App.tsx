import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AboutScreen from "./screens/AboutScreen";
import {
  DrawerParamList,
  StackParamList,
  TopTabsParamList,
} from "./interfaces/NavigationInterfaces";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const Tab = createBottomTabNavigator<StackParamList>();
  const Stack = createNativeStackNavigator<StackParamList>();
  const Drawer = createDrawerNavigator<DrawerParamList>();
  const TopTab = createMaterialTopTabNavigator<TopTabsParamList>();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <TopTab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "black",
              tabBarLabelStyle: { fontSize: 14 },
              tabBarStyle: { height: 60 },
            }}
          >
            <TopTab.Screen name="Home" component={HomeScreen} />
            <TopTab.Screen name="About" component={AboutScreen} />
          </TopTab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
