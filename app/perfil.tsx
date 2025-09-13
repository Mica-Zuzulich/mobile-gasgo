import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import { styles } from "../styles/PerfilStyles";

export default function Perfil() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    telefono: "",
    nacimiento: "",
    ciudad: "",
    numero: "",
    manzana: "",
    lote: "",
    barrio: "",
    cuit: "",
    direccionFiscal: "",
  });

  const onChange = (key: string, value: string) => setForm({ ...form, [key]: value });

  const onSubmit = () => {
    Alert.alert("✅ Datos guardados");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      {/* Datos personales */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Datos personales</Text>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={form.nombre}
            onChangeText={(value) => onChange("nombre", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={form.apellido}
            onChangeText={(value) => onChange("apellido", value)}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Correo de contacto"
            value={form.email}
            keyboardType="email-address"
            onChangeText={(value) => onChange("email", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="DNI"
            value={form.dni}
            keyboardType="numeric"
            onChangeText={(value) => onChange("dni", value)}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Teléfono / Celular"
            value={form.telefono}
            keyboardType="phone-pad"
            onChangeText={(value) => onChange("telefono", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha de nacimiento (YYYY-MM-DD)"
            value={form.nacimiento}
            onChangeText={(value) => onChange("nacimiento", value)}
          />
        </View>
      </View>

      {/* Dirección de entrega */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Dirección de entrega</Text>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Ciudad"
            value={form.ciudad}
            onChangeText={(value) => onChange("ciudad", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Número"
            value={form.numero}
            keyboardType="numeric"
            onChangeText={(value) => onChange("numero", value)}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Manzana"
            value={form.manzana}
            onChangeText={(value) => onChange("manzana", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Lote"
            value={form.lote}
            onChangeText={(value) => onChange("lote", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Barrio"
            value={form.barrio}
            onChangeText={(value) => onChange("barrio", value)}
          />
        </View>
      </View>

      {/* Datos de facturación */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Datos de facturación</Text>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="CUIT/CUIL"
            value={form.cuit}
            onChangeText={(value) => onChange("cuit", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Dirección fiscal"
            value={form.direccionFiscal}
            onChangeText={(value) => onChange("direccionFiscal", value)}
          />
        </View>
      </View>

      {/* Acciones */}
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.btn, styles.ghost]}>
          <Text style={styles.btnText}>¿Necesitás ayuda con el registro?</Text>
        </TouchableOpacity>

        <View style={styles.actionsRight}>
          <TouchableOpacity style={[styles.btn, styles.danger]}>
            <Text style={styles.btnText}>Eliminar mi cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.primary]} onPress={onSubmit}>
            <Text style={styles.btnText}>Guardar datos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
