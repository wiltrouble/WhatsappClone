import {StyleSheet, Text, View, Image} from 'react-native';
import { ChatListItemInterface } from '../../intefaces/ChatItemInteface';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import styles from './styles'


const ChatListItem = ({user, lastMessage}:ChatListItemInterface) => {
  const uri = user.image
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri
        }}
        style={styles.profilePhoto}
      />
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>{user.name}</Text>
          <Text style={styles.time}>{dayjs(lastMessage.createdAt).fromNow(true)}</Text>
        </View>
        <Text style={styles.message} numberOfLines={2}>{lastMessage.text}</Text>
      </View>
    </View>
  );
};

export default ChatListItem;

