import {ImageBackground, StyleSheet, Text, View, FlatList} from 'react-native';

import bg from '../assets/images/BG.png';
import Message from '../components/Message';
import messages from '../assets/data/messages.json';

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
