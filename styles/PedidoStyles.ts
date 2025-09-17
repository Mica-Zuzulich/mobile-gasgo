import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - CARD_MARGIN * 3) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: CARD_MARGIN,
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: CARD_MARGIN,
    marginHorizontal: CARD_MARGIN / 2,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  imagen: {
    width: "100%",
    height: CARD_WIDTH * 0.9,
    resizeMode: "contain",
    marginBottom: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: Colors.light.tint,
  },
  precio: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  botonPedir: {
    marginTop: 5,
    backgroundColor: "#0a7ea4",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 12,
    shadowColor: "#0a7ea4",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  textoBotonPedir: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});
