import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  FlatList,
  Platform,
} from 'react-native';

import bg from '../assets/images/BG.png';
import Message from '../components/Message';
import messages from '../assets/data/messages.json';
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
