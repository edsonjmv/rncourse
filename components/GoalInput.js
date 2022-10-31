import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image
} from 'react-native';

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onClose} />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});

export default GoalInput;
