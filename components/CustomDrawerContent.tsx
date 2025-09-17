import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/GlobalStyles';
import { DrawerStyles } from '../styles/DrawerStyles';
import { useAuth } from '../contexts/AuthContext';

interface MenuItem {
  name: string;
  icon: string;
  route: string;
  screen: string;
}

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const router = useRouter();
  const { user, logout } = useAuth();

  if (!user) return null;

const menuItems: MenuItem[] = [
  { name: 'Inicio', icon: 'home', route: '/', screen: 'index' },
  { name: 'Hacer Pedido', icon: 'flame', route: '/pedido', screen: 'pedido' },
  { name: 'Notificaciones', icon: 'notifications', route: '/notificaciones', screen: 'notificaciones' },
  { name: 'Historial de pedidos', icon: 'time', route: '/historial', screen: 'historial' },
  { name: 'Perfil', icon: 'person', route: '/perfil', screen: 'perfil' },
  { name: 'Ayuda', icon: 'help-circle', route: '/ayuda', screen: 'ayuda' }, // <--- esto
];

  const isItemActive = (screenName: string): boolean => {
    return props.state.index !== undefined &&
           props.state.routes[props.state.index].name === screenName;
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={DrawerStyles.container}>
      <View style={DrawerStyles.header}>
        <Text style={DrawerStyles.title}>GASGO</Text>
        <Text style={DrawerStyles.subtitle}>Tu app de gas delivery</Text>
      </View>

      <View style={DrawerStyles.itemsContainer}>
        {menuItems.map((item, index) => {
          const active = isItemActive(item.screen);
          return (
            <TouchableOpacity
              key={index}
              style={[DrawerStyles.item, active && DrawerStyles.activeItem]}
              onPress={() => router.push(item.route as any)}
            >
              <View style={DrawerStyles.itemContainer}>
                <Ionicons 
                  name={item.icon as any} 
                  size={22} 
                  style={active ? DrawerStyles.activeIcon : DrawerStyles.icon}
                />
                <Text style={active ? DrawerStyles.activeLabel : DrawerStyles.label}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={DrawerStyles.footer}>
        <TouchableOpacity 
          style={DrawerStyles.footerItem}
          onPress={async () => {
            await logout();
            router.replace('/login'); 
          }}
        >
          <Ionicons 
            name="log-out" 
            size={22} 
            style={DrawerStyles.icon}
          />
          <Text style={DrawerStyles.label}>
            Cerrar Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
