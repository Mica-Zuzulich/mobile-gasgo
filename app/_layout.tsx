import React from "react";
import { Text } from "react-native";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "../styles/GlobalStyles";
import { LayoutStyles } from "../styles/LayoutStyles";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Text style={{ textAlign: "center", marginTop: 50 }}>Cargando usuario...</Text>;
  }

  if (!user) {
    return (
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="login" options={{ title: "Iniciar Sesión" }} />
      </Drawer>
    );
  }

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: LayoutStyles.headerStyle,
        headerTintColor: Colors.white,
        headerTitleAlign: "center",
        headerTitle: () => <Text style={LayoutStyles.headerTitle}>GASGO</Text>,
        drawerStyle: LayoutStyles.drawerStyle,
        drawerActiveBackgroundColor: Colors.secondary,
        drawerActiveTintColor: Colors.primary,
        drawerInactiveTintColor: Colors.white,
        drawerLabelStyle: LayoutStyles.drawerLabel,
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Inicio" }} />
      <Drawer.Screen name="pedido" options={{ title: "Hacer Pedido" }} />
      <Drawer.Screen name="notificaciones" options={{ title: "Notificaciones" }} />
      <Drawer.Screen name="historial" options={{ title: "Historial de pedidos" }} />
      <Drawer.Screen name="perfil" options={{ title: "Perfil" }} />
      <Drawer.Screen name="ayuda" options={{ title: "Ayuda" }} />    
      
      </Drawer>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigator />
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
