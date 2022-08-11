import React from 'react';

import colors from '../styles/Colors'

import LoginPage from '../views/LoginPage/index';
import IndexPage from '../views/IndexPage/index';

import { View } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();


function AppStack() {
  
  return (
    <NavigationContainer theme={DarkTheme}>
      <Navigator screenOptions={{headerShown: false, animationEnabled: true }}>
        <Screen name="LoginPage" component={LoginPage} />
        <Screen name="IndexPage" component={IndexPage} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;