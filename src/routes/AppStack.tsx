import React from 'react';

import LoginPage from '../views/LoginPage/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#18171F'}}}>
        <Screen name="LoginPage" component={LoginPage} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;