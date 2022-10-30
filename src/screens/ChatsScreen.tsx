import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import chats from '../../src/assets/data/chats.json'
import ChatListItem from '../components/ChatListItem'
import { ChatListItemInterface } from '../intefaces/ChatItemInteface'

const ChatsScreen = () => {
  const renderItem = ({item}:any) => (
    <ChatListItem user={item.user} lastMessage={item.lastMessage}/>
  )
  return (
      <FlatList data={chats} renderItem={renderItem} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}/>
  )
}

export default ChatsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
})