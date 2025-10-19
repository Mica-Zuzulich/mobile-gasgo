import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { HistorialStyles } from '../styles/HistorialStyles';
import { Colors } from '../styles/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import { API_URL } from '@env'; 

type Pedido = {
  id: number;
  cliente: string;
  email: string;
  total: number | string | null;
  estado: string | null;
  created_at: string | null;
};

type EstadoFilter = 'todos' | 'pendiente' | 'completado' | 'cancelado';

export default function Historial() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<EstadoFilter>('todos');

  // ✅ CAMBIO: Usar localhost en lugar de IP
  const API_URL = 'http://localhost:3000/api/orders';

  const fetchPedidos = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`Error ${res.status}: ${await res.text()}`);
      const data: Pedido[] = await res.json();
      setPedidos(data);
    } catch (err) {
      console.error('Error al traer pedidos:', err);
      setPedidos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const filteredPedidos = filter === 'todos'
    ? pedidos
    : pedidos.filter(pedido => pedido.estado?.toLowerCase() === filter);

  const getEstadoColor = (estado: string | null) => {
    switch (estado?.toLowerCase()) {
      case 'completado': return { bg: '#d4edda', text: '#155724' };
      case 'pendiente': return { bg: '#fff3cd', text: '#856404' };
      case 'cancelado': return { bg: '#f8d7da', text: '#721c24' };
      default: return { bg: Colors.lightGray, text: Colors.text };
    }
  };

  const handleCancelar = (pedidoId: number) => {
    Alert.alert(
      "Cancelar pedido",
      "¿Estás seguro de que querés cancelar este pedido?",
      [
        { text: "No" },
        { 
          text: "Sí", 
          onPress: async () => {
            try {
              const res = await fetch(`${API_URL}/${pedidoId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
              });
              if (!res.ok) throw new Error(`Error ${res.status}`);
              setPedidos(prev => prev.map(p => p.id === pedidoId ? { ...p, estado: 'cancelado' } : p));
              Alert.alert('✅ Pedido cancelado', 'El pedido ha sido cancelado correctamente.');
            } catch (err) {
              console.error('Error al cancelar pedido:', err);
              Alert.alert('❌ Error', 'No se pudo cancelar el pedido. Revisa que la app pueda acceder al servidor.');
            }
          } 
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={HistorialStyles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={HistorialStyles.loadingText}>Cargando pedidos...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={HistorialStyles.container}>
        <Text style={HistorialStyles.title}>Historial de Pedidos</Text>

        {/* Filtros */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
          <View style={HistorialStyles.filterContainer}>
            {(['todos', 'pendiente', 'completado', 'cancelado'] as EstadoFilter[]).map(filtro => (
              <TouchableOpacity
                key={filtro}
                style={[
                  HistorialStyles.filterButton,
                  filter === filtro && HistorialStyles.filterButtonActive
                ]}
                onPress={() => setFilter(filtro)}
              >
                <Text style={[
                  HistorialStyles.filterText,
                  filter === filtro && HistorialStyles.filterTextActive
                ]}>
                  {filtro.charAt(0).toUpperCase() + filtro.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {filteredPedidos.length === 0 ? (
          <View style={HistorialStyles.loadingContainer}>
            <Ionicons name="receipt" size={60} color={Colors.gray} />
            <Text style={HistorialStyles.noPedidos}>
              {filter === 'todos' ? 'No tenés pedidos realizados.' : `No hay pedidos ${filter}`}
            </Text>
          </View>
        ) : (
          <FlatList
            data={filteredPedidos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              const totalNumber = Number(item.total || 0);
              const estadoColor = getEstadoColor(item.estado);

              return (
                <View style={HistorialStyles.pedidoCard}>
                  <View style={HistorialStyles.pedidoHeader}>
                    <Text style={HistorialStyles.pedidoId}>Pedido #{item.id}</Text>
                    <View style={[HistorialStyles.estadoBadge, { backgroundColor: estadoColor.bg }]}>
                      <Text style={[HistorialStyles.estadoText, { color: estadoColor.text }]}>
                        {item.estado?.toUpperCase() || 'DESCONOCIDO'}
                      </Text>
                    </View>
                  </View>

                  <Text style={HistorialStyles.clienteText}>{item.cliente || 'Sin nombre'}</Text>
                  <Text style={HistorialStyles.pedidoText}>📧 {item.email || 'Sin email'}</Text>
                  <Text style={HistorialStyles.totalText}>Total: ${totalNumber.toFixed(2)}</Text>
                  <Text style={HistorialStyles.fechaText}>
                    📅 {item.created_at ? new Date(item.created_at).toLocaleString('es-AR') : 'Fecha desconocida'}
                  </Text>

                  {item.estado?.toLowerCase() === 'pendiente' && (
                    <TouchableOpacity
                      style={HistorialStyles.cancelButton}
                      onPress={() => handleCancelar(item.id)}
                    >
                      <Text style={HistorialStyles.cancelButtonText}>Cancelar pedido</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />
        )}
      </View>
    </ScrollView>
  );
}