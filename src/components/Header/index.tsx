import { View, Image } from 'react-native';
import { styles } from './style';

export function Header() {
  const logo = require('../../../assets/icon.png');

  return (
    <View style={styles.container}>
      <Image source={logo} alt="Logo toDo" resizeMode="contain" />
    </View>
  );
}
