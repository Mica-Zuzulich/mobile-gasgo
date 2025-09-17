import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import { PerfilStyles } from "../styles/PerfilStyles";

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
    <ScrollView style={PerfilStyles.container}>
      <Text style={PerfilStyles.title}>Mi Perfil</Text>

      {/* Datos personales */}
      <View style={PerfilStyles.card}>
        <Text style={PerfilStyles.subtitle}>Datos personales</Text>

        <View style={PerfilStyles.row}>
          <TextInput
            style={PerfilStyles.input}
            placeholder="Nombre"
            value={form.nombre}
            onChangeText={(value) => onChange("nombre", value)}
          />
          <TextInput
            style={PerfilStyles.input}
            placeholder="Apellido"
            value={form.apellido}
            onChangeText={(value) => onChange("apellido", value)}
          />
        </View>

        <View style={PerfilStyles.row}>
          <TextInput
            style={PerfilStyles.input}
            placeholder="Correo de contacto"
            value={form.email}
            keyboardType="email-address"
            onChangeText={(value) => onChange("email", value)}
          />
          <TextInput
            style={PerfilStyles.input}
            placeholder="DNI"
            value={form.dni}
            keyboardType="numeric"
            onChangeText={(value) => onChange("dni", value)}
          />
        </View>

        <View style={PerfilStyles.row}>
          <TextInput
            style={PerfilStyles.input}
            placeholder="Teléfono / Celular"
            value={form.telefono}
            keyboardType="phone-pad"
            onChangeText={(value) => onChange("telefono", value)}
          />
          <TextInput
            style={PerfilStyles.input}
            placeholder="Fecha de nacimiento (YYYY-MM-DD)"
            value={form.nacimiento}
            onChangeText={(value) => onChange("nacimiento", value)}
          />
        </View>
      </View>

      {/* Dirección de entrega */}
      <View style={PerfilStyles.card}>
        <Text style={PerfilStyles.subtitle}>Dirección de entrega</Text>

        <View style={PerfilStyles.row}>
          <TextInput
            style={PerfilStyles.input}
            placeholder="Ciudad"
            value={form.ciudad}
            onChangeText={(value) => onChange("ciudad", value)}
          />
          <TextInput
            style={PerfilStyles.input}
            placeholder="Número"
            value={form.numero}
            keyboardType="numeric"
            onChangeText={(value) => onChange("numero", value)}
          />
        </View>

        <View style={PerfilStyles.row}>
          <TextInput
            style={PerfilStyles.input}
            placeholder="Manzana"
            value={form.manzana}
            onChangeText={(value) => onChange("manzana", value)}
          />
          <TextInput
            style={PerfilStyles.input}
            placeholder="Lote"
            value={form.lote}
            onChangeText={(value) => onChange("lote", value)}
          />
          <TextInput
            style={PerfilStyles.input}
            placeholder="Barrio"
            value={form.barrio}
            onChangeText={(value) => onChange("barrio", value)}
          />
        </View>
      </View>

      {/* Datos de facturación */}
      <View style={PerfilStyles.card}>
        <Text style={PerfilStyles.subtitle}>Datos de facturación</Text>

        <View style={PerfilStyles.row}>
          <TextInput
            style={PerfilStyles.input}
            placeholder="CUIT/CUIL"
            value={form.cuit}
            onChangeText={(value) => onChange("cuit", value)}
          />
          <TextInput
            style={PerfilStyles.input}
            placeholder="Dirección fiscal"
            value={form.direccionFiscal}
            onChangeText={(value) => onChange("direccionFiscal", value)}
          />
        </View>
      </View>

      {/* Acciones */}
      <View style={PerfilStyles.actions}>
        <TouchableOpacity style={[PerfilStyles.btn, PerfilStyles.ghost]}>
          <Text style={PerfilStyles.btnText}>¿Necesitás ayuda con el registro?</Text>
        </TouchableOpacity>

        <View style={PerfilStyles.actionsRight}>
          <TouchableOpacity style={[PerfilStyles.btn, PerfilStyles.danger]}>
            <Text style={PerfilStyles.btnText}>Eliminar mi cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[PerfilStyles.btn, PerfilStyles.primary]} onPress={onSubmit}>
            <Text style={PerfilStyles.btnText}>Guardar datos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
