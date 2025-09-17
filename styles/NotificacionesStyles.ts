import { StyleSheet } from "react-native";

export const notificacionesStyles = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 12, elevation: 2 },
  title: { fontSize: 18, fontWeight: "700", color: "#0d6ea8", marginBottom: 8 },
  separator: { height: 2, backgroundColor: "#0d6ea8", marginVertical: 8 },
  body: { color: "#666", marginBottom: 8 },
  image: { width: "100%", height: 300, borderRadius: 8, resizeMode: "cover" },
});
