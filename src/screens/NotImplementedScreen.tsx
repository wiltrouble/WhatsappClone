import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const NotImplementedScreen = () => {
  return (
    <View>
      <Image source={{uri: 'https://i.pinimg.com/564x/d7/69/9f/d7699fe324036f1afa98bbbab4ff82d6.jpg'}} style={styles.image}/>
    </View>
  )
}

export default NotImplementedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: "100%",
  }
})