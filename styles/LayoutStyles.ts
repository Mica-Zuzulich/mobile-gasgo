import { StyleSheet } from 'react-native';
import { Colors } from './GlobalStyles';

export const LayoutStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.secondary,
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  drawerStyle: {
    width: 280,
    backgroundColor: Colors.primary,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerStyle: {
    backgroundColor: Colors.primary,
    height: 100,
    shadowColor: Colors.darkBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderBottomWidth: 0,
  },
  drawerLabel: {
    fontSize: 16,
    marginLeft: -6,
    fontWeight: '500',
  },
  drawerItem: {
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 4,
  },
});