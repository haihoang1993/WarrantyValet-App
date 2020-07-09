/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListPlansScreen, DetailTicketsScreen,DetailUserUpdateScreen,
  DetailProductScreen, AddTicketsScreen, 
  TestReduxSaga, SignUpScreen, MainScreen, LoginScreen, AddProducts, PrewSrcreen } from '@screens';
import { useTheme } from 'react-native-paper';
const Stack = createStackNavigator();

const Screens = {
  MainScreen: 'MainScreen',
  AddProductsScreen: 'AddProducts',
  ListPlanScreen: 'ListPlanScreen',
  LoginScreen: 'LoginScreen',
  SignUpScreen: 'SignUpScren',
  DetailProuctScreen: 'DetailProductScreen',
  DetailTicketScreen: 'DetailTicketScreen',
  AddTicketsScreen: 'AddTicketsScreen',
  DetailUpdateUser: 'DetailUpdateUser',
  PrewScreen: 'PrewScreen',
};

function NavApp(props) {
  const { initPage } = props;
  const theme = useTheme();
  const { colors } = theme;
  return (
    <Stack.Navigator
      initialRouteName={initPage}
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
        headerTitleStyle: styles.titleHeader
      }}>
      <Stack.Screen options={{ headerShown: false }} name={Screens.PrewScreen} component={PrewSrcreen} />
      <Stack.Screen options={header('PLANS & PRICING')} name={Screens.ListPlanScreen} component={ListPlansScreen} />
      <Stack.Screen options={header('Login')} name={Screens.LoginScreen} component={LoginScreen} />
      <Stack.Screen options={header('Register')} name={Screens.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen options={{ headerShown: false }} name={Screens.MainScreen} component={MainScreen} />
      <Stack.Screen name={Screens.DetailTicketScreen} component={DetailTicketsScreen} />
      <Stack.Screen name={Screens.AddTicketsScreen} component={AddTicketsScreen} />
      <Stack.Screen name={Screens.AddProductsScreen} component={AddProducts} />
      <Stack.Screen name={Screens.DetailUpdateUser} component={DetailUserUpdateScreen} />
      <Stack.Screen name={Screens.DetailProuctScreen} component={DetailProductScreen} />
    </Stack.Navigator>
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

const styles = StyleSheet.create({
  titleHeader: {
      fontSize: 20,
      fontWeight: '500',
      color: 'white',
      textAlign: 'center',
  },
});