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
import { connect  } from 'react-redux'
import { UserReduxAll } from '@redux';

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
  const { initPage, userApp } = props;
  console.log('nav app:',props);
  if(userApp)
    props.setUser(userApp);
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
      <Stack.Screen name={Screens.ListPlanScreen} component={ListPlansScreen} />
      <Stack.Screen name={Screens.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={Screens.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen options={{ headerShown: false }} name={Screens.MainScreen} component={MainScreen} />
      <Stack.Screen name={Screens.DetailTicketScreen} component={DetailTicketsScreen} />
      <Stack.Screen name={Screens.AddTicketsScreen} component={AddTicketsScreen} />
      <Stack.Screen name={Screens.AddProductsScreen} component={AddProducts} />
      <Stack.Screen name={Screens.DetailUpdateUser} component={DetailUserUpdateScreen} />
      <Stack.Screen name={Screens.DetailProuctScreen} component={DetailProductScreen} />
    </Stack.Navigator>
  );
}

export {
  Screens
}
// export default NavApp;

export default connect(null,(dispatch)=>{
  return { 
    setUser:(use)=>{
      dispatch(UserReduxAll.ActionsUser.setUser(use));
    }
  }
})(NavApp)

const styles = StyleSheet.create({
  titleHeader: {
      fontSize: 18,
      fontWeight: '500',
      color: 'white',
      textAlign: 'center',
  },
});