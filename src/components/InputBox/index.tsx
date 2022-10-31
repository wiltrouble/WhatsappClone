import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import PlusIcon from 'react-native-vector-icons/Fontisto';
import SendIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn('sending a new message');
  };

  return (
    <View style={styles.container}>
      <PlusIcon name="plus-a" size={40} color="royalblue" />
      <TextInput
        placeholder="type your message"
        style={styles.input}
        value={newMessage}
        onChangeText={setNewMessage}
      />
      <SendIcon
        name="send-circle"
        size={45}
        color="royalblue"
        style={styles.send}
        onPress={onSend}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    fontSize: 16,
  },
  send: {},
});
