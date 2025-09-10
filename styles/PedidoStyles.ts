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
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  cantidadControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cantidadBtn: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  cantidadBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cantidadSpan: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  btnConfirmar: {
    backgroundColor: "#34C759",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  btnConfirmarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnDisabled: {
    backgroundColor: "#aaa",
  },
});
