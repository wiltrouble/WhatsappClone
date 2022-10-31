<<<<<<< HEAD
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  FlatList,
  Platform,
} from 'react-native';
=======
import {ImageBackground, StyleSheet, Text, View, FlatList} from 'react-native';
>>>>>>> 6680a9df0ee27845958a441595d755d59189bb56

import bg from '../assets/images/BG.png';
import Message from '../components/Message';
import messages from '../assets/data/messages.json';
<<<<<<< HEAD
import InputBox from '../components/InputBox';

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.bg}>
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({item}) => (
            <Message
              text={item.text}
              createdAt={item.createdAt}
              user={item.user}
              id={''}
            />
          )}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
=======

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({item}) => (
          <Message
            text={item.text}
            createdAt={item.createdAt}
            user={item.user}
          />
        )}
        style={styles.list}
        inverted
      />
    </ImageBackground>
>>>>>>> 6680a9df0ee27845958a441595d755d59189bb56
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
