import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../screens/ChatScreen'
import ChatsScreen from '../screens/ChatsScreen'

const Navigator = () => {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Chats' component={ChatsScreen}/>
        <Stack.Screen name='Chat' component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator