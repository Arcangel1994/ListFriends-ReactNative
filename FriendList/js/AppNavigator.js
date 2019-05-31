import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import { Icon } from 'expo'

import FriendScreen from './screens/FriendScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'

const HomeStack = createStackNavigator({ HomeScreen, FriendScreen },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'aliceblue'
      },
      headerTintColor: 'darkorange',
    }
  } )

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeStack, navigationOptions: { title: 'Home', tabBarIcon: ({tintColor}) => ( <Icon.Feather name="home" size={24} color={tintColor} /> ) } },
  Settings: { screen: SettingsScreen, navigationOptions: { title: 'Settings', tabBarIcon: ({tintColor}) => ( <Icon.Feather name="settings" size={24} color={tintColor} /> ) } },
},{
    tabBarOptions: {
        activeTintColor: 'darkorange',
        style: { backgroundColor: 'aliceblue' }
    }
})


export default createAppContainer(TabNavigator);