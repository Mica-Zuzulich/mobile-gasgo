import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import * as Location from "expo-location";
import { productosBase } from "../constants/productos";
import styles from "../styles/DetalleStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Detalle() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string }>();
  const id = params.id;

  const producto = productosBase.find((p) => p.id === Number(id));
  const [cantidad, setCantidad] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [ubicacion, setUbicacion] = useState<{ lat: number; lon: number } | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      setCantidad(0);
      setDireccion("");
      setUbicacion(null);
    }, [])
  );

  const usarMiUbicacion = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos tu ubicación para autocompletar la dirección");
      return;
    }
    const loc = await Location.getCurrentPositionAsync({});
    setUbicacion({ lat: loc.coords.latitude, lon: loc.coords.longitude });

    const dir = await Location.reverseGeocodeAsync(loc.coords);
    if (dir.length > 0) {
      const d = dir[0];
      setDireccion(`${d.street || ""} ${d.name || ""}, ${d.city || ""}`);
    }
  };

  const confirmarPedido = () => {
    if (cantidad === 0) {
      Alert.alert("Atención", "Selecciona al menos 1 unidad");
      return;
    }
    if (!direccion) {
      Alert.alert("Atención", "Ingresa la dirección de entrega o usa tu ubicación");
      return;
    }
    if (!/\d/.test(direccion)) {
      Alert.alert("Atención", "La dirección debe incluir un número de calle");
      return;
    }

    Alert.alert(
      "Pedido confirmado",
      `Has pedido ${cantidad} ${producto?.nombre}(s) 🚚\nSe enviará a: ${direccion}`
    );

    setCantidad(0);
    setDireccion("");
    setUbicacion(null);
  };

  if (!producto) return <Text>Cargando producto...</Text>;

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, padding: 20, backgroundColor: "#f9f9f9" }}
      extraHeight={120}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <Image
        source={producto.imagen}
        style={{ ...styles.imagenGrande, marginBottom: 15 }}
      />
      <Text style={{ ...styles.nombre, fontSize: 26, marginBottom: 5 }}>{producto.nombre}</Text>
      <Text style={{ ...styles.precio, fontSize: 22, color: "#333", marginBottom: 15 }}>
        ${producto.precio}
      </Text>

      <View style={{ ...styles.controles, marginBottom: 20 }}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCantidad(Math.max(cantidad - 1, 0))}
        >
          <Text style={styles.textoBoton}>-</Text>
        </TouchableOpacity>
        <Text style={{ ...styles.cantidad, fontSize: 18 }}>{cantidad}</Text>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCantidad(cantidad + 1)}
        >
          <Text style={styles.textoBoton}>+</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={{ ...styles.input, marginBottom: 15 }}
        placeholder="Dirección de entrega"
        value={direccion}
        onChangeText={setDireccion}
      />

      <TouchableOpacity
        style={{ ...styles.botonConfirmar, backgroundColor: "#ff6b00", marginBottom: 10 }}
        onPress={usarMiUbicacion}
      >
        <Text style={styles.textoConfirmar}>Usar mi ubicación actual</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.botonConfirmar, backgroundColor: "#28a745", marginBottom: 15 }}
        onPress={confirmarPedido}
      >
        <Text style={styles.textoConfirmar}>Confirmar pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.botonVolver, alignSelf: "center" }}
        onPress={() => router.back()}
      >
        <Text style={styles.textoVolver}>Volver</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}
