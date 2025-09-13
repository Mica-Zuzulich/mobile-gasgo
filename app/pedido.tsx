import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "../styles/PedidoStyles";

export default function Pedido() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Garrafa 10L", precio: 5000, cantidad: 0 },
    { id: 2, nombre: "Garrafa 12L", precio: 6000, cantidad: 0 },
    { id: 3, nombre: "Garrafa 15L", precio: 7000, cantidad: 0 },
  ]);

  const aumentarCantidad = (id: number) => {
    setProductos(
      productos.map((prod) =>
        prod.id === id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
      )
    );
  };

  const disminuirCantidad = (id: number) => {
    setProductos(
      productos.map((prod) =>
        prod.id === id && prod.cantidad > 0
          ? { ...prod, cantidad: prod.cantidad - 1 }
          : prod
      )
    );
  };

  const total = productos.reduce(
    (sum, prod) => sum + prod.precio * prod.cantidad,
    0
  );

  // 🔹 Función para enviar pedido al backend
  const handleConfirmar = async () => {
    const order = {
      estado: "Pendiente",
      total: total,
      cliente: "Micaela",  // Podés reemplazar con datos del usuario logueado
      email: "micaela@example.com" // Lo mismo aquí
    };

    try {
      const res = await fetch("http://localhost:3000/api/orders", { // <-- reemplaza localhost si usas celular
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      const data = await res.json();
      console.log("Pedido creado:", data);
      Alert.alert("✅ Pedido creado exitosamente!");
    } catch (err) {
      console.error(err);
      Alert.alert("❌ Error al crear pedido");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Pedido</Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nombre}</Text>
            <Text style={styles.cardPrice}>Precio: ${item.precio}</Text>

            <View style={styles.cantidadControls}>
              <TouchableOpacity
                style={styles.cantidadBtn}
                onPress={() => disminuirCantidad(item.id)}
              >
                <Text style={styles.cantidadBtnText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.cantidadSpan}>{item.cantidad}</Text>

              <TouchableOpacity
                style={styles.cantidadBtn}
                onPress={() => aumentarCantidad(item.id)}
              >
                <Text style={styles.cantidadBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* 🔹 Botón Confirmar Pedido */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total}</Text>
        <TouchableOpacity
          style={[styles.btnConfirmar, total === 0 && styles.btnDisabled]}
          disabled={total === 0}
          onPress={handleConfirmar} // <-- acá conectamos con la función
        >
          <Text style={styles.btnConfirmarText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
