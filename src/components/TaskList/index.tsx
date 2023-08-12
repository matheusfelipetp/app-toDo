import { FlatList, View } from 'react-native';
import { InfoTask } from '../InfoTask';
import { ITasks } from '../MainContent';
import { EmptyList } from '../EmptyList';
import { Task } from '../Task';
import { styles } from './style';
import { Dispatch, SetStateAction } from 'react';

interface ITaskList {
  tasks: ITasks[];
  setTasks: Dispatch<SetStateAction<ITasks[]>>;
}

export function TaskList({ tasks, setTasks }: ITaskList) {
  const handleRemoveTask = (id: string) => {
    const filteredTasks = tasks.filter((elem) => elem.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <View>
      <InfoTask tasks={tasks} />

      <View style={styles.list}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              item={item}
              tasks={tasks}
              setTasks={setTasks}
              handleRemoveTask={handleRemoveTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
}
