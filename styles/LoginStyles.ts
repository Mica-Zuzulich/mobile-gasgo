import { StyleSheet } from 'react-native';
import { Colors } from './GlobalStyles';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: Colors.text,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.gray,
  },
  signupLink: {
    color: Colors.secondary,
    fontWeight: 'bold',
  },
});
