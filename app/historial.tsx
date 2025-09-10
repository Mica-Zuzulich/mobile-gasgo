import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../styles/HistorialStyles';

function Historial() {
  const pedidos = [
    { id: '1', fecha: '2025-08-30', estado: 'Entregado', total: '$1500' },
    { id: '2', fecha: '2025-08-28', estado: 'En camino', total: '$900' },
    { id: '3', fecha: '2025-08-25', estado: 'Cancelado', total: '$1200' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Pedidos</Text>

      {pedidos.length === 0 ? (
        <Text style={styles.noPedidos}>No tenés pedidos realizados.</Text>
      ) : (
        <FlatList
          data={pedidos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.pedidoCard}>
              <Text style={styles.pedidoText}>ID Pedido: {item.id}</Text>
              <Text style={styles.pedidoText}>Fecha: {item.fecha}</Text>
              <Text style={styles.pedidoText}>Estado: {item.estado}</Text>
              <Text style={styles.pedidoText}>Total: {item.total}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

export default Historial;
