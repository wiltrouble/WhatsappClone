import { Button, StyleSheet, Text, View } from 'react-native'
import {Auth} from 'aws-amplify'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Button title='Sign out' onPress={() => Auth.signOut()}/>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})