import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Colors, GlobalStyles } from '../styles/GlobalStyles';
import { LoginStyles as styles } from '../styles/LoginStyles';

export default function Signup() {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [barrio, setBarrio] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!nombre || !apellido || !email || !password || !confirmPassword || !dni) {
      setError('Por favor completa todos los campos requeridos');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Ingresa un email válido');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const SERVER_URL = 'https://d860d28522d7.ngrok-free.app';

      const response = await fetch(`${SERVER_URL}/api/users/register`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        nombre,
        apellido,
        email,
        password,
        telefono,
        dni,
        direccion_fiscal: direccion,
        ciudad,
        barrio
  }),
});

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error en el registro');
      }

      Alert.alert('¡Éxito!', 'Usuario registrado correctamente');
      router.replace('/login');

    } catch (error: any) {
      console.error('Signup error:', error);
      setError(error.message || 'Error al registrar el usuario.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Apellido" value={apellido} onChangeText={setApellido} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar Contraseña" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Teléfono" value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="DNI" value={dni} onChangeText={setDni} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Dirección Fiscal" value={direccion} onChangeText={setDireccion} />
      <TextInput style={styles.input} placeholder="Ciudad" value={ciudad} onChangeText={setCiudad} />
      <TextInput style={styles.input} placeholder="Barrio" value={barrio} onChangeText={setBarrio} />

      <TouchableOpacity
        style={[GlobalStyles.button, { backgroundColor: Colors.secondary }, loading && { opacity: 0.7 }]}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={[GlobalStyles.buttonText, { color: Colors.primary }]}>
          Registrarse
        </Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        ¿Ya tienes cuenta?{" "}
        <Text style={[styles.signupLink, { color: Colors.primary }]} onPress={() => !loading && router.push("/login")}>
          Inicia sesión
        </Text>
      </Text>
    </ScrollView>
  );
}
