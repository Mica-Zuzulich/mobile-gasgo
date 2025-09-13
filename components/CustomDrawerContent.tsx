// app/components/CustomDrawerContent.tsx
import React from "react";
import { View, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { drawerStyles as styles } from "../styles/DrawerStyles";

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const currentRoute = props.state.routeNames[props.state.index];

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Image source={require("../assets/gasgo.png")} style={styles.logo} />
      </View>

      <View style={styles.items}>
        <DrawerItem
          label="Hacer Pedido"
          onPress={() => router.push("/pedido")}
          icon={({ size, color }) => <MaterialIcons name="local-gas-station" size={size} color={color} />}
          style={currentRoute === "pedido" ? styles.activeItem : undefined}
        />

        <DrawerItem
          label="Notificaciones"
          onPress={() => router.push("/notificaciones")}
          icon={({ size, color }) => <Ionicons name="notifications-outline" size={size} color={color} />}
          style={currentRoute === "notificaciones" ? styles.activeItem : undefined}
        />

        <DrawerItem
          label="Historial de pedidos"
          onPress={() => router.push("/historial")}
          icon={({ size, color }) => <Ionicons name="document-text-outline" size={size} color={color} />}
          style={currentRoute === "historial" ? styles.activeItem : undefined}
        />

        <DrawerItem
          label="Perfil de usuario"
          onPress={() => router.push("/perfil")}
          icon={({ size, color }) => <Ionicons name="person-outline" size={size} color={color} />}
          style={currentRoute === "perfil" ? styles.activeItem : undefined}
        />
      </View>

      <View style={styles.footer}>
        <DrawerItem
          label="Cerrar sesión"
          onPress={() => router.replace("/login")}
          icon={({ size, color }) => <Ionicons name="log-out-outline" size={size} color={color} />}
        />
      </View>
    </DrawerContentScrollView>
  );
}
