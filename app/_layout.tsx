// app/_layout.tsx
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: "#007AFF" }, // color header
          headerTintColor: "#fff", // color texto header
          drawerActiveTintColor: "#007AFF", // color ítem activo
        }}
      >
        <Drawer.Screen name="index" options={{ drawerLabel: "Inicio" }} />
        <Drawer.Screen name="pedido" options={{ drawerLabel: "Hacer Pedido" }} />
        <Drawer.Screen name="historial" options={{ drawerLabel: "Historial" }} />
        <Drawer.Screen name="notificaciones" options={{ drawerLabel: "Notificaciones" }} />
        <Drawer.Screen name="perfil" options={{ drawerLabel: "Perfil" }} />
        <Drawer.Screen name="logout" options={{ drawerLabel: "Cerrar Sesión" }} />
      </Drawer>
    </>
  );
}
