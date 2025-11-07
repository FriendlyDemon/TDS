import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Soma from "./screens/Soma";
import Subtracao from "./screens/Subtracao";
import Divisao from "./screens/Divisao";
import Multiplicacao from "./screens/Multiplicacao";
import Icon from "@expo/vector-icons/FontAwesome5";
import Iconx from "@expo/vector-icons/FontAwesome";

export default function App() {
  let Bottom = createBottomTabNavigator();
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Bottom.Navigator
            screenOptions={({ route }) => ({
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "black",
              tabBarIcon: ({ color }) => {
                switch (route.name) {
                  case "Soma":
                    return <Icon name="plus" size={15} color={color} />;
                  case "Subtracao":
                    return <Icon name="minus" size={15} color={color} />;
                  case "Multiplicacao":
                    return <Iconx name="close" size={16} color={color} />;
                  case "Divisao":
                    return <Icon name="divide" size={15} color={color} />;
                  default:
                    break;
                }
              },
            })}
          >
            <Bottom.Screen name="Soma" component={Soma} />
            <Bottom.Screen name="Subtracao" component={Subtracao} />
            <Bottom.Screen name="Multiplicacao" component={Multiplicacao} />
            <Bottom.Screen name="Divisao" component={Divisao} />
          </Bottom.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
