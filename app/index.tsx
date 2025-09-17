import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { homeStyles as styles } from "../styles/HomeStyles";
import { Colors } from "../styles/GlobalStyles";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login"); 
      }
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tu gas, en minutos</Text>
      <Text style={styles.subtitle}>Rápido, seguro y confiable. ¡Haz tu pedido ahora!</Text>

      <View style={styles.actions}>
        {user && (
          <TouchableOpacity 
            style={[styles.btn, styles.primary]} 
            onPress={() => router.push("/pedido")}
          >
            <Ionicons name="flame" size={20} color={Colors.white} style={{ marginRight: 8 }} />
            <Text style={[styles.btnText, styles.primaryBtnText]}>Hacer pedido</Text>
          </TouchableOpacity>
        )}

        {!user && (
          <TouchableOpacity 
            style={[styles.btn, styles.secondary]} 
            onPress={() => router.push("/signup")}
          >
            <Ionicons name="person-add" size={20} color={Colors.primary} style={{ marginRight: 8 }} />
            <Text style={[styles.btnText, styles.secondaryBtnText]}>Crear cuenta</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.cards}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name="time" size={24} color={Colors.secondary} />
          </View>
          <Text style={styles.cardTitle}>Cilindros de gas</Text>
          <Text style={styles.cardText}>Entrega rápida y confiable directamente a tu hogar.</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name="phone-portrait" size={24} color={Colors.secondary} />
          </View>
          <Text style={styles.cardTitle}>Fácil de usar</Text>
          <Text style={styles.cardText}>Realiza tu pedido en pocos clics desde cualquier dispositivo.</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name="shield-checkmark" size={24} color={Colors.secondary} />
          </View>
          <Text style={styles.cardTitle}>Seguridad garantizada</Text>
          <Text style={styles.cardText}>Cumplimos con todos los protocolos de seguridad y calidad.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
