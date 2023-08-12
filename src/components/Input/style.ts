import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -50,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 56,
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E6F9F',
    padding: 16,
    borderRadius: 5,
  },
});
