import React from 'react';

import colors from '../styles/Colors'

import LoginPage from '../views/LoginPage/index';
import IndexPage from '../views/IndexPage/index';
import ForgotPage from '../views/WarningPages/ForgotPage/index';
import CustomersPage from '../views/CustomersPage';
import CustomerPage from '../views/CustomerPage';

import { View } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();


function AppStack() {
  
  return (
    <NavigationContainer theme={DarkTheme}>
      <Navigator 
      screenOptions={{headerShown: false, animationEnabled: true }}>
        <Screen name="LoginPage" component={LoginPage} />
        <Screen name="IndexPage" component={IndexPage} />
        <Screen name="ForgotPage" component={ForgotPage} />
        <Screen name="CustomersPage" component={CustomersPage} />
        <Screen name="CustomerPage" component={CustomerPage} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;