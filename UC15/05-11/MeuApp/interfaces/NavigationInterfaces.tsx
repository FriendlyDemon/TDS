import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface StackParamList extends ParamListBase {
  Home: undefined;
  Profile: { userId: number };
  About: undefined;
}
export interface DrawerParamList extends ParamListBase {
  Home: undefined;
  About: undefined;
}
export interface HomeScreenPropsDrawer {
  route: RouteProp<ParamListBase, "Home">;
  navigation: NativeStackNavigationProp<DrawerParamList, "Home">;
}
export interface AboutScreenPropsDrawer {
  route: RouteProp<ParamListBase, "About">;
  navigation: NativeStackNavigationProp<DrawerParamList, "About">;
}

export interface TopTabsParamList extends ParamListBase {
  Home: undefined;
  About: undefined;
}
export interface HomeScreenPropsTop {
  navigation: MaterialTopTabNavigationProp<TopTabsParamList, "Home">;
}
export interface AboutScreenPropsTop {
  navigation: MaterialTopTabNavigationProp<TopTabsParamList, "About">;
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
