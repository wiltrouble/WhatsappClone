import {StyleSheet, Text, View, Image} from 'react-native';

import styles from './styles'

interface Props {
  uri: string;
  name: string;
  time: string;
}

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
        }}
        style={styles.profilePhoto}
      />
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>Lukas</Text>
          <Text style={styles.time}>7:30</Text>
        </View>
        <Text style={styles.message} numberOfLines={2}>Oke</Text>
      </View>
    </View>
  );
};

export default ChatListItem;

