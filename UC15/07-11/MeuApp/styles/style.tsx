import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 3,
    borderRadius: 50,
    borderBlockColor: "blue",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#d0d5ff",
    width: 200,
    textAlign: "center",
  },
  text: { fontWeight: "bold" },
});
