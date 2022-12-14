import { StatusBar, StyleSheet, View } from 'react-native'
import Navigator from './src/navigation'
import { Amplify } from 'aws-amplify'
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'

Amplify.configure({...awsconfig, Analytics: {disabled: true}})

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
})

export default withAuthenticator(App)