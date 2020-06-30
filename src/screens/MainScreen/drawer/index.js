import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../drawer/DrawerContent';
const Drawer = createDrawerNavigator();
import * as Screens from '../screens';

const RootNavigator = (props) => {
  const {navigation} = props;
  const listScreen = Object.entries(Screens.ListScreens).map((e) => {
    return {...e[1]};
  });
  console.log('list screen:', listScreen);
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent listScreens={listScreen} {...props} />
      )}>
      <Drawer.Screen
        name={Screens.ListScreens.products.name}
        component={Screens.ProductsScreen}
      />
      <Drawer.Screen
        name={Screens.ListScreens.subscription.name}
        component={Screens.MySubscriptionScreen}
      />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
