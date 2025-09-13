import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: { padding: 18, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "800", textAlign: "center", marginTop: 6 },
  subtitle: { textAlign: "center", color: "#666", marginVertical: 10, fontSize: 15 },
  actions: { flexDirection: "row", justifyContent: "center", marginVertical: 18 },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 8,
    minWidth: 140,
    alignItems: "center",
  },
  primary: { backgroundColor: "#0d6ea8" },
  secondary: { backgroundColor: "#2dbb4a" },
  btnText: { color: "#fff", fontWeight: "700" },
  cards: { marginTop: 6 },
  card: { backgroundColor: "#f6f8fa", borderRadius: 12, padding: 14, marginBottom: 12, alignItems: "center" },
  cardTitle: { fontWeight: "700", fontSize: 16, marginBottom: 6 },
  cardText: { textAlign: "center", color: "#666" },
});
