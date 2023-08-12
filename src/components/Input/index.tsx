import { TextInput, View, TouchableOpacity } from 'react-native';
import { PlusCircle } from 'phosphor-react-native';
import { styles } from './style';
import { useState } from 'react';

interface IInput {
  handleAddTask: (task: string) => void;
}

export function Input({ handleAddTask }: IInput) {
  const [taskName, setTaskName] = useState('');

  const onPressAddTask = () => {
    handleAddTask(taskName);
    setTaskName('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={taskName}
        onChangeText={setTaskName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onPressAddTask}
        disabled={!taskName}
      >
        <PlusCircle size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
