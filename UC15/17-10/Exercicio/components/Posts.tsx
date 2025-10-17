import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Posts(props: {
  post: { writer: string; title: string; text: string };
}) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text style={styles.writer}>{props.post.writer}</Text>
        <Text style={styles.title}>{props.post.title}</Text>
      </View>
      <View style={styles.viewPost}>
        <Text style={styles.post}>{props.post.text}</Text>
      </View>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    width: "100%",
    height: "auto",
    borderColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    marginTop: 10,
    padding: 5,
    backgroundColor: "#505080",
  },
  view2: {},
  writer: { paddingVertical: 5 },
  title: { paddingHorizontal: 5, fontWeight: "bold" },
  viewPost: {},
  post: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    margin: 5,
    padding: 3,
    backgroundColor: "white",
  },
  viewBtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 7,
    padding: 5,
  },
  btn: {
    borderRadius: 25,
    backgroundColor: "#5090f0",
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});
