import { StyleSheet, FlatList } from 'react-native'

import chats from '../../src/assets/data/chats.json';
import ContactListItem from '../components/ContactListItem';

const ContactsScreen = () => {
  const renderItem = ({item}: any) => (
    <ContactListItem user={item.user} lastMessage={item.lastMessage} />
  );
  return (
    <FlatList
      data={chats}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white'}}
    />
  );
}

export default ContactsScreen

const styles = StyleSheet.create({})