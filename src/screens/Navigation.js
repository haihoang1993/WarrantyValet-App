/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ListPlansScreen} from '@screens';

const Stack = createStackNavigator();

function  NavApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListPlansScreen" component={ListPlansScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavApp;
