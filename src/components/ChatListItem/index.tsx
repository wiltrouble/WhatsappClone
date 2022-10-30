import {StyleSheet, Text, View, Image} from 'react-native';
import { ChatListItem as Props} from '../../intefaces/ChatItemInteface';

import styles from './styles'


const ChatListItem = ({id, user, lastMessage}:Props) => {
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
          <Text style={styles.time}>{lastMessage.createdAt}</Text>
        </View>
        <Text style={styles.message} numberOfLines={2}>{lastMessage.text}</Text>
      </View>
    </View>
  );
};

export default ChatListItem;

