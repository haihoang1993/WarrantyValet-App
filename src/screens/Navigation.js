/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ListPlansScreen,TestReduxSaga,MainScreen,LoginScreen,AddProducts} from '@screens';
import { useTheme } from 'react-native-paper';
const Stack = createStackNavigator();

function  NavApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown: false}}  name="ListPlansScreen" component={ListPlansScreen} /> */}
        {/* <Stack.Screen  options={header('Login')} name="LoginScreen" component={LoginScreen} /> */}
        <Stack.Screen options={{headerShown: false}}  name="ListPlansScreen" component={MainScreen} />
        <Stack.Screen  options={header('Add Product')}  name="AddProducts" component={AddProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function header(title = ''){
  const theme = useTheme();
  const { colors } = theme;
  return {
    title: title,
    headerStyle: {
      backgroundColor: colors.primary ,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}

export default NavApp;
