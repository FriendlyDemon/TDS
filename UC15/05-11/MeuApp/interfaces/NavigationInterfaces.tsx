import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface StackParamList extends ParamListBase {
  Home: undefined;
  Profile: { userId: number };
  About: undefined;
}

export interface HomeScreenProps {
  route: RouteProp<ParamListBase, "Home">;
  navigation: NativeStackNavigationProp<StackParamList, "Home">;
}

export interface ProfileScreenProps {
  route: RouteProp<StackParamList, "Profile">;
  navigation: NativeStackNavigationProp<StackParamList, "Profile">;
}

export interface AboutScreenProps {
  route: RouteProp<ParamListBase, "About">;
  navigation: NativeStackNavigationProp<StackParamList, "About">;
}
