import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
    borderBottomColor: "#ccc",
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginBottom: 10,
    fontSize: 16,
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
  },
  ghost: {
    backgroundColor: "#f0f0f0",
  },
  danger: {
    backgroundColor: "#ff3b30",
  },
  primary: {
    backgroundColor: "#007AFF",
  },
});
