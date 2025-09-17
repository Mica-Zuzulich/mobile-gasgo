import { StyleSheet } from 'react-native';
import { Colors, GlobalStyles } from './GlobalStyles';

export const homeStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  actions: {
    gap: 15,
    marginBottom: 30,
  },
  btn: {
    ...GlobalStyles.button,
    paddingVertical: 16,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  btnText: {
    ...GlobalStyles.buttonText,
  },
  primaryBtnText: {
    color: Colors.white,
  },
  secondaryBtnText: {
    color: Colors.primary,
  },
  cards: {
    gap: 16,
  },
  card: {
    ...GlobalStyles.card,
    padding: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.lightSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
});