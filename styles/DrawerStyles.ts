import { StyleSheet } from 'react-native';
import { Colors } from './GlobalStyles';

export const DrawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  header: {
    backgroundColor: Colors.darkBlue,
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 5,
  },
  subtitle: {
    color: Colors.secondary,
    fontSize: 14,
  },
  itemsContainer: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 4,
  },
  activeItem: {
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 4,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  icon: {
    marginRight: 15,
    color: Colors.white,
  },
  activeIcon: {
    marginRight: 15,
    color: Colors.primary,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white,
  },
  activeLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
});