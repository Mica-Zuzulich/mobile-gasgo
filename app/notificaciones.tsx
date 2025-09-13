import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { notificacionesStyles as styles } from "../styles/NotificacionesStyles";

export default function Notificaciones() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={styles.card}>
        <Text style={styles.title}>✉️ Carnaval de descuentos</Text>
        <View style={styles.separator} />
        <Text style={styles.body}>
          20% de descuento en tus compras desde el viernes 28-feb al martes 4-mar con el código CARNAVAL
        </Text>
      </View>
    </ScrollView>
  );
}
