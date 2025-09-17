import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { Colors } from "../styles/GlobalStyles";
import { AyudaStyles } from "../styles/AyudaStyles";

export default function Ayuda() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarMensaje = () => {
    if (!nombre || !email || !mensaje) {
      Alert.alert("Atención", "Por favor completa todos los campos");
      return;
    }
    Alert.alert("Mensaje enviado", "Gracias por contactarnos 😊");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <ScrollView contentContainerStyle={AyudaStyles.container}>
      <Text style={AyudaStyles.title}>Ayuda & Contacto</Text>

      <Text style={AyudaStyles.label}>Nombre</Text>
      <TextInput
        style={AyudaStyles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Tu nombre"
      />

      <Text style={AyudaStyles.label}>Email</Text>
      <TextInput
        style={AyudaStyles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Tu email"
        keyboardType="email-address"
      />

      <Text style={AyudaStyles.label}>Mensaje</Text>
      <TextInput
        style={[AyudaStyles.input, { height: 100 }]}
        value={mensaje}
        onChangeText={setMensaje}
        placeholder="Escribe tu mensaje..."
        multiline
      />

      <TouchableOpacity style={AyudaStyles.button} onPress={enviarMensaje}>
        <Text style={AyudaStyles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <View style={AyudaStyles.info}>
        <Text style={AyudaStyles.infoText}>📞 Tel: +54 9 11 1234-5678</Text>
        <Text style={AyudaStyles.infoText}>✉️ Email: soporte@miapp.com</Text>
        <Text style={AyudaStyles.infoText}>⏰ Lunes a Viernes, 9:00 - 18:00</Text>
      </View>
    </ScrollView>
  );
}
