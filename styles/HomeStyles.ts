import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  hero: { padding: 20, alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#000", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555", textAlign: "center", marginBottom: 20 },
  actions: { flexDirection: "row", gap: 10 },
  btnPrimary: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  btnSecondary: {
    backgroundColor: "#34C759",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  features: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  featureCard: {
    width: "45%",
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  featureTitle: { fontSize: 18, fontWeight: "bold", marginTop: 10, color: "#000" },
  featureText: { fontSize: 14, textAlign: "center", color: "#555", marginTop: 5 },
});
