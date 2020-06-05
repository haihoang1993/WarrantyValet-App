import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../drawer/DrawerContent';
const Drawer = createDrawerNavigator();
import HomeScreen from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RootNavigator = (props) => {
  const {navigation} = props;
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
