import { StyleSheet } from 'react-native';
import { Colors } from './GlobalStyles';

export const HistorialStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  loadingText: {
    fontSize: 16,
    color: Colors.text,
  },
  noPedidos: {
    fontSize: 18,
    color: Colors.gray,
    textAlign: 'center',
    marginTop: 50,
  },
  pedidoCard: {
    padding: 20,
    marginBottom: 15,
    borderRadius: 16,
    backgroundColor: Colors.white,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(13, 54, 102, 0.1)',
  },
  pedidoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  pedidoId: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
  estadoBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: Colors.lightSecondary,
  },
  estadoText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primary,
  },
  pedidoText: {
    fontSize: 14,
    color: Colors.text,
    marginBottom: 6,
  },
  clienteText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 10,
  },
  fechaText: {
    fontSize: 12,
    color: Colors.gray,
    fontStyle: 'italic',
    marginTop: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary,
  },
  filterText: {
    fontSize: 14,
    color: Colors.text,
  },
  filterTextActive: {
    color: Colors.white,
    fontWeight: '600',
  },
  cancelButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f44336', 
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
