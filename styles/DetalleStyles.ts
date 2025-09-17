import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.light.background,
    alignItems: "center",
  },
  imagenGrande: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    resizeMode: "contain",
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.tint,
    marginBottom: 10,
    textAlign: "center",
  },
  precio: {
    fontSize: 20,
    color: "#444",
    marginBottom: 20,
  },
  controles: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  boton: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textoBoton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cantidad: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  botonConfirmar: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  textoConfirmar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  botonUbicacion: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  textoUbicacion: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  botonVolver: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoVolver: {
    color: "#000",
    fontSize: 16,
  },
});
