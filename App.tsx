import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListItem from './src/components/ChatListItem'
import chats from './src/assets/data/chats.json'
import ChatsScreen from './src/screens/ChatsScreen'
import ChatScreen from './src/screens/ChatScreen'
import Navigator from './src/navigation'

const chat1 = chats[3]

const App = () => {
  return (
    <Navigator />
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 50
  }
})