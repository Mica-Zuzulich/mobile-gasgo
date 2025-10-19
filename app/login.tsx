import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { Colors, GlobalStyles } from '../styles/GlobalStyles';
import { LoginStyles as styles } from '../styles/LoginStyles';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      setError('Por favor completa todos los campos');
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

      // ✅ CORREGIDO: Quita el "http://" duplicado
      const response = await fetch(`${SERVER_URL}/api/users/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });

      // Verifica si la respuesta es JSON válido
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Respuesta no JSON: ${text}`);
      }

      if (!response.ok) {
        throw new Error(data.error || `Error ${response.status}: ${response.statusText}`);
      }

      await login(data.user);
      Alert.alert('¡Bienvenido!', `Hola ${data.user.nombre}`);
      router.replace('/');

    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.message || 'Error al iniciar sesión. Verifica tus credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={Colors.gray}
        editable={!loading}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={Colors.gray}
        editable={!loading}
      />

      <TouchableOpacity
        style={[GlobalStyles.button, { backgroundColor: Colors.primary }, loading && { opacity: 0.7 }]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color={Colors.white} /> : <Text style={[GlobalStyles.buttonText, { color: Colors.white }]}>Ingresar</Text>}
      </TouchableOpacity>

      <Text style={styles.signupText}>
        ¿No tienes cuenta?{" "}
        <Text style={[styles.signupLink, { color: Colors.secondary }]} onPress={() => !loading && router.push("/signup")}>
          Regístrate
        </Text>
      </Text>
    </View>
  );
}