import { Text, View } from 'react-native';
import { ClipboardText } from 'phosphor-react-native';
import { styles } from './style';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <ClipboardText size={80} color="#333333" />
      <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
