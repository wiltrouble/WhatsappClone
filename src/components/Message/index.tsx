import {StyleSheet, Text, View} from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import {MessageInterface} from '../../intefaces/MessagesInteface';

const Message = ({text, createdAt, user}: MessageInterface) => {
  const isMyMessage = () => {
    return user.id === 'u1';
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? '#dcf8c5' : 'white',
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text>{text}</Text>
      <Text style={styles.time}>{dayjs(createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 1,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
});
