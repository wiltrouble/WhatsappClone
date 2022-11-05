import {Text, View, Image, Pressable} from 'react-native';
import { ChatListItemInterface } from '../../intefaces/ChatItemInteface';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import styles from './styles'
import { useNavigation } from '@react-navigation/native';


const ContactListItem = ({user, lastMessage}:ChatListItemInterface) => {
  const uri = user.image

  const navigation = useNavigation()
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <Image
        source={{
          uri
        }}
        style={styles.profilePhoto}
      />
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>{user.name}</Text>
        </View>
        <Text style={styles.message} numberOfLines={2}>{user.status}</Text>
      </View>
    </Pressable>
  );
};

export default ContactListItem;

