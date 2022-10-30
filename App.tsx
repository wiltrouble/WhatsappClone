import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListItem from './src/components/ChatListItem'

const App = () => {
  return (
    <View style={styles.container}>
      <ChatListItem />
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