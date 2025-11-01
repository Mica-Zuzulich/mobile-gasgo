import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import * as Location from "expo-location";
import { productosBase, Producto } from "../constants/productos";
import styles from "../styles/DetalleStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuth } from "../contexts/AuthContext"; 
const SERVER_URL = 'https://gasgo-backend-production.up.railway.app';
const API_BASE_URL = `${SERVER_URL}/api/orders`;

export default function Detalle() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string }>();
  const id = params.id;
  
  const { user } = useAuth(); 
  
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
      const fullAddress = [d.street, d.name, d.city, d.region].filter(Boolean).join(' ');
      setDireccion(fullAddress);
    }
  };

  const confirmarPedido = async () => { 
    if (!user || !user.id) {
        Alert.alert("Acceso denegado", "Debes iniciar sesión para realizar un pedido.");
       
        return;
    }

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

    if (!producto) {
      Alert.alert("Error", "Producto no encontrado.");
      return;
    }

    const total = cantidad * producto.precio;
    
    const pedidoData = {
      user_id: user.id,
      total: total,
      estado: 'pendiente', 
      productos: [
        {
          product_id: producto.id,
          cantidad: cantidad,
          precio_unitario: producto.precio, 
        }
      ],
      direccion_entrega: direccion, 
      ubicacion_lat: ubicacion?.lat || null,
      ubicacion_lon: ubicacion?.lon || null,
    };
    
    try {
      const res = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedidoData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error en el servidor: ${res.status} - ${errorText}`);
      }

      Alert.alert(
        "Pedido confirmado",
        `Has pedido ${cantidad} ${producto.nombre}(s) 🚚\nSe enviará a: ${direccion}`
      );

      setCantidad(0);
      setDireccion("");
      setUbicacion(null);
      router.back(); 

    } catch (error) {
      console.error('Error al enviar el pedido:', error);
      Alert.alert(
        "Error al crear pedido", 
        "Hubo un problema al conectar con el servidor o los datos son incorrectos. Revisa los logs de Railway."
      );
    }
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
