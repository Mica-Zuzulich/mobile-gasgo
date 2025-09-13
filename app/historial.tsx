import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { styles } from '../styles/HistorialStyles';

type Pedido = {
  id: number;
  cliente: string;
  email: string;
  total: number;
  estado: string;
  created_at: string;
};

export default function Historial() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]); // <-- Tipado
  const [loading, setLoading] = useState(true);

  const fetchPedidos = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/orders'); // usar IP si es celular
      const data: Pedido[] = await res.json(); // <-- Tipado
      setPedidos(data);
    } catch (err) {
      console.error('Error al traer pedidos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0d6ea8" />
        <Text>Cargando pedidos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Pedidos</Text>

      {pedidos.length === 0 ? (
        <Text style={styles.noPedidos}>No tenés pedidos realizados.</Text>
      ) : (
        <FlatList
          data={pedidos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.pedidoCard}>
              <Text style={styles.pedidoText}>ID Pedido: {item.id}</Text>
              <Text style={styles.pedidoText}>Cliente: {item.cliente}</Text>
              <Text style={styles.pedidoText}>Email: {item.email}</Text>
              <Text style={styles.pedidoText}>Estado: {item.estado}</Text>
              <Text style={styles.pedidoText}>Total: ${item.total}</Text>
              <Text style={styles.pedidoText}>
                Fecha: {new Date(item.created_at).toLocaleString()}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
