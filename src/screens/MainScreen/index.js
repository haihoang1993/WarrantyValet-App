/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BaseScreen from '../BaseScreen';
import Drawer from './drawer';
import { EventApp, StorageDB } from '@helpers';
import { ScreensName } from '@screens';

export default (props) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    const { navigation } = props;
    EventApp.OnToScreen( (name, data) => {
      if (name == 'logout') {
        StorageDB.setUserLogin(null);
        StorageDB.setIsLogin(false);
        navigation.reset({
          index: 0,
          routes: [{ name: ScreensName.PrewScreen }],
        })
      } else {
        console.log('OnToScreen');
        navigation.push(name, data);
      }
    });
  }, []);

  return <Drawer />;
};
