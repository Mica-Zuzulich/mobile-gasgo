import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#0D3666',       
  secondary: '#FFD100',     
  background: '#F5F5F5',   
  text: '#333333',         
  white: '#FFFFFF',
  lightGray: '#E8E8E8',
  darkBlue: '#0A2A4D',
  gray: '#9E9E9E',
  lightPrimary: 'rgba(13, 54, 102, 0.1)',
  lightSecondary: 'rgba(255, 209, 0, 0.2)',
  danger: '#FF3B30',  
};


export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.secondary,
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(13, 54, 102, 0.05)',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});