import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textCreate: {
    color: '#4EA8DE',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textFinished: {
    color: '#8284FA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  number: {
    backgroundColor: '#333333',
    alignItems: 'center',
    borderRadius: 999,
    width: 30,
    padding: 5,
  },
  numberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  borderBottom: {
    width: '100%',
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
});
