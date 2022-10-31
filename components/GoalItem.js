import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
  function deleteItemHandler() {
    props.onDeleteItem(props.id);
  }

  return (
    <Pressable onPress={deleteItemHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: 'white'
  }
});

export default GoalItem;
