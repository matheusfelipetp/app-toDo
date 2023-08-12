import { TouchableOpacity, View } from 'react-native';
import { ITasks } from '../MainContent';
import { CheckBox } from 'react-native-elements';
import { useState, Dispatch, SetStateAction } from 'react';
import { Trash } from 'phosphor-react-native';
import { styles } from './style';

interface IItem {
  item: ITasks;
  tasks: ITasks[];
  handleRemoveTask: (id: string) => void;
  setTasks: Dispatch<SetStateAction<ITasks[]>>;
}

export function Task({ item, handleRemoveTask, tasks, setTasks }: IItem) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);

    const updatedList = tasks.map((task) => {
      if (task.id === item.id) {
        return {
          ...task,
          isFinished: !isChecked,
        };
      }
      return task;
    });

    setTasks(updatedList);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        title={item.task}
        checked={isChecked}
        onPress={toggleCheckbox}
        containerStyle={styles.checkboxStyle}
        textStyle={
          isChecked ? styles.checkboxTextCheckedStyle : styles.checkboxTextStyle
        }
        checkedColor="#5E60CE"
      />

      <TouchableOpacity
        style={styles.icon}
        onPress={() => handleRemoveTask(item.id)}
      >
        <Trash size={24} color="#f44a7a" />
      </TouchableOpacity>
    </View>
  );
}
