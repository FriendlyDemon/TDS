import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function Header(props: {
  img: ImageSourcePropType;
  name: string;
}) {
  return (
    <View style={styles.view}>
      <Image source={props.img} style={styles.img}></Image>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderStyle: "solid",
    width: "100%",
    padding: 10,
    backgroundColor: "#303050",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "white",
  },
  text: { color: "white", fontWeight: "bold" },
});
