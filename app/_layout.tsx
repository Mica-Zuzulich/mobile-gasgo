// app/_layout.tsx
import React from "react";
import { Image } from "react-native";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../components/CustomDrawerContent";

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "#0d6ea8", height: 86 },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitle: () => (
          <Image
            source={require("../assets/images/gasgo.png")}
            style={{ width: 160, height: 40, resizeMode: "contain" }}
          />
        ),
        drawerStyle: { width: 280 },
        drawerActiveBackgroundColor: "#eaf6ff",
        drawerActiveTintColor: "#0d6ea8",
        drawerLabelStyle: { fontSize: 16, marginLeft: -6 },
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Inicio" }} />
      <Drawer.Screen name="pedido" options={{ title: "Hacer Pedido" }} />
      <Drawer.Screen name="notificaciones" options={{ title: "Notificaciones" }} />
      <Drawer.Screen name="historial" options={{ title: "Historial de pedidos" }} />
      <Drawer.Screen name="perfil" options={{ title: "Perfil" }} />
    </Drawer>
  );
}
