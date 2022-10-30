import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListItem from './src/components/ChatListItem'
import chats from './src/assets/data/chats.json'

const chat1 = chats[0]

const App = () => {
  return (
    <View style={styles.container}>
      <ChatListItem user={chat1.user} lastMessage={chat1.lastMessage} id='s'/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})