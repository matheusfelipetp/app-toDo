import { View } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './style';
import { MainContent } from '../../components/MainContent';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MainContent />
    </View>
  );
}
