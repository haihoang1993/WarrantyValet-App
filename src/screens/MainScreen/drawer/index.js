import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../drawer/DrawerContent';
const Drawer = createDrawerNavigator();
import * as Screens from '../screens';

const RootNavigator = (props) => {
  const {navigation} = props;
  return (
    <Drawer.Navigator
      drawerContent={() => (
        <DrawerContent listScreens={Screens.ListScreens} {...props} />
      )}>
      <Drawer.Screen name="Home" component={Screens.ProductsScreen} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
