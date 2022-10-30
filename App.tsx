import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListItem from './src/components/ChatListItem'
import chats from './src/assets/data/chats.json'
import ChatsScreen from './src/screens/ChatsScreen'

const chat1 = chats[3]

const App = () => {
  return (
    <View style={styles.container}>
      <ChatsScreen />
    </View>
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