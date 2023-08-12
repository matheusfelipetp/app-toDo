import { View } from 'react-native';
import { Input } from '../Input';
import { TaskList } from '../TaskList';
import { styles } from './style';
import { useState } from 'react';
import uuid from 'react-native-uuid';

export interface ITasks {
  id: string;
  task: string;
  isFinished: boolean;
}

export function MainContent() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const handleAddTask = (task: string) => {
    if (task) {
      const newTask = {
        id: uuid.v4() as string,
        task,
        isFinished: false,
      };

      setTasks((prev) => [...prev, newTask]);
    }
  };

  return (
    <View style={styles.container}>
      <Input handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </View>
  );
}
