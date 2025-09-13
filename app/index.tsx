import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { homeStyles as styles } from "../styles/HomeStyles";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tu gas, en minutos</Text>
      <Text style={styles.subtitle}>Rápido, seguro y confiable. ¡Haz tu pedido ahora!</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.btn, styles.primary]} onPress={() => router.push("/pedido")}>
          <Text style={styles.btnText}>Hacer pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.secondary]} onPress={() => router.push("/signup")}>
          <Text style={styles.btnText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cilindros de gas</Text>
          <Text style={styles.cardText}>Entrega rápida y confiable directamente a tu hogar.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Fácil de usar</Text>
          <Text style={styles.cardText}>Realiza tu pedido en pocos clics desde cualquier dispositivo.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Seguridad garantizada</Text>
          <Text style={styles.cardText}>Cumplimos con todos los protocolos de seguridad y calidad.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
