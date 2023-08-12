import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxStyle: {
    backgroundColor: '#262626',
    borderWidth: 0,
    padding: 16,
    flex: 1,
    borderRadius: 5,
  },
  checkboxTextStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
  },
  checkboxTextCheckedStyle: {
    color: '#808080',
    textDecorationLine: 'line-through',
    fontSize: 16,
    fontWeight: 'normal',
  },
  icon: {
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 5,
  },
});
