import { StyleSheet } from "react-native";
import { Colors } from "./GlobalStyles";

export const AyudaStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.background,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  info: {
    marginTop: 20,
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    marginVertical: 2,
    color: Colors.text,
  },
});
