import { StyleSheet } from "react-native";
import { Colors, GlobalStyles } from "./GlobalStyles";

export const PerfilStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: Colors.primary,
  },
  card: {
    ...GlobalStyles.card,
    padding: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.primary,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    minWidth: "30%",
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginBottom: 10,
    fontSize: 16,
    color: Colors.text,
  },
  actions: {
    marginTop: 10,
  },
  actionsRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  ghost: {
    backgroundColor: Colors.lightGray,
  },
  danger: {
    backgroundColor: Colors.danger,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
});
