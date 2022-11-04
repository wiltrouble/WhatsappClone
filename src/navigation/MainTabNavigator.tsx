import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ChatScreen from '../screens/ChatScreen';
import NotImplementedScreen from '../screens/NotImplementedScreen';
import ChatsScreen from '../screens/ChatsScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Status"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="circle-double" size={24} color="gray" />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-call-outline" size={24} color="gray" />
          ),
        }}
      />
      <Tab.Screen name="Community" component={NotImplementedScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='people-outline' size={24} color='gray' />
        )
      }}/>
      <Tab.Screen name="Chats" component={ChatsScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='md-chatbubbles-outline' size={24} color='gray' />
        )
      }}/>
      <Tab.Screen
        name="Settings"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="setting" size={24} color="gray" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
