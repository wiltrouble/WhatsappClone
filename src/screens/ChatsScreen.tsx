import {FlatList} from 'react-native';
import React from 'react';

import chats from '../../src/assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

const ChatsScreen = () => {
  const renderItem = ({item}: any) => (
    <ChatListItem user={item.user} lastMessage={item.lastMessage} />
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
};

export default ChatsScreen;
