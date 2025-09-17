import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { productosBase, Producto } from "../constants/productos";
import { useRouter } from "expo-router";
import styles from "../styles/PedidoStyles";

export default function Pedido() {
  const router = useRouter();

  const renderProducto = ({ item }: { item: Producto }) => (
    <View style={styles.card}>
      <Image source={item.imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text style={styles.precio}>${item.precio}</Text>

      <TouchableOpacity
        style={styles.botonPedir}
        onPress={() => router.push(`/detalle?id=${item.id}`)}
      >
        <Text style={styles.textoBotonPedir}>Pedir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productosBase}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProducto}
        contentContainerStyle={styles.lista}
        numColumns={2}
      />
    </View>
  );
}
