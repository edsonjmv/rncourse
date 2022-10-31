import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function addGoalHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() }
    ]);
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput onAddGoal={addGoalHandler} visible={isModalVisible} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  }
});
