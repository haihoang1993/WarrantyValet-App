import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../drawer/DrawerContent';
const Drawer = createDrawerNavigator();
import * as Screens from '../screens';
import { connect } from 'react-redux';

const SCREEN_ACITVE_ERROR = 'SCREEN_ACITVE_ERROR';

const RootNavigator = (props) => {
  const { navigation, userCurent } = props;
  const listScreen = Object.entries(Screens.ListScreens).map((e) => {
    return { ...e[1] };
  });

  console.log('list screen:', userCurent);
  const { is_activated } = userCurent;
  const initPage = is_activated ? Screens.ListScreens.products.name : SCREEN_ACITVE_ERROR;
  return (
    <Drawer.Navigator
      initialRouteName={initPage}
      drawerContent={(props) => (
        <DrawerContent userCurent={userCurent} listScreens={listScreen} {...props} />
      )}>
      <Drawer.Screen
        name={Screens.ListScreens.products.name}
        component={Screens.ProductsScreen}
      />
      <Drawer.Screen
        name={Screens.ListScreens.subscription.name}
        component={Screens.MySubscriptionScreen}
      />
      <Drawer.Screen
        name={Screens.ListScreens.payment.name}
        component={Screens.PaymentScreen}
      />
      <Drawer.Screen
        name={Screens.ListScreens.tickets.name}
        component={Screens.TicketsScreen}
      />
      <Drawer.Screen
        name={SCREEN_ACITVE_ERROR}
        component={Screens.ScreenErrorActive}
      />
    </Drawer.Navigator>
  );
};



const mapStateToProps = (state) => {
  return {
    userCurent: state.UserReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => {
      dispatch({ type: UserReduxAll.TypeActions.GET_USER, value: { test: 'test' } })
    }
  };
};


const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootNavigator);


export default Container;
