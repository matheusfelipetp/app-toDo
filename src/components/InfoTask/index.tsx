import { View, Text } from 'react-native';
import { styles } from './style';
import { ITasks } from '../MainContent';

interface IInfoTask {
  tasks: ITasks[];
}

export function InfoTask({ tasks }: IInfoTask) {
  const tasksFinished = tasks.filter((elem) => elem.isFinished);

  return (
    <View>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.textCreate}>Criadas</Text>
          <View style={styles.number}>
            <Text style={styles.numberText}>{tasks?.length}</Text>
          </View>
        </View>

        <View style={styles.info}>
          <Text style={styles.textFinished}>Concluídas</Text>
          <View style={styles.number}>
            <Text style={styles.numberText}>{tasksFinished?.length}</Text>
          </View>
        </View>
      </View>

      <View style={styles.borderBottom} />
    </View>
  );
}
