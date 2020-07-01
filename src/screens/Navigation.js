/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListPlansScreen, DetailProductScreen, AddTicketsScreen , TestReduxSaga,SignUpScreen, MainScreen, LoginScreen, AddProducts } from '@screens';
import { useTheme } from 'react-native-paper';
const Stack = createStackNavigator();

const Screens = {
  MainScreen: 'MainScreen',
  AddProductsScreen: 'AddProducts',
  ListPlanScreen: 'ListPlanScreen',
  LoginScreen:'LoginScreen',
  SignUpScreen:'SignUpScren',
  DetailProuctScreen:'DetailProductScreen',
  AddTicketsScreen:'AddTicketsScreen',
};

function NavApp() {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <NavigationContainer>
      <Stack.Navigator  
          screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                    shadowOpacity: 0,
                    shadowOffset: {
                        height: 0,
                        width: 0,
                    },
                    shadowRadius: 0,
                    borderBottomWidth: 0,
                    elevation: 0,
                },
                headerTintColor: 'white',
                // headerTitleStyle: styles.titleHeader,
            }}>
        <Stack.Screen options={{headerShown: false}}  name={Screens.ListPlanScreen} component={ListPlansScreen} />
        <Stack.Screen  options={header('Login')} name={Screens.LoginScreen} component={LoginScreen} />
        <Stack.Screen  options={header('Register')} name={Screens.SignUpScreen} component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name={Screens.MainScreen} component={MainScreen} />
        <Stack.Screen  options={header('Add New Tickets')} name={Screens.AddTicketsScreen} component={AddTicketsScreen} />
        <Stack.Screen  options={header('Add New Product')} name={Screens.AddProductsScreen} component={AddProducts} />
        <Stack.Screen  options={header('Product')} name={Screens.DetailProuctScreen} component={DetailProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function header(title = '') {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  const { colors } = theme;
  return {
    title: title,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}
export {
  Screens
}
export default NavApp;
