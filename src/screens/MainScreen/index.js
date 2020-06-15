import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import BaseScreen from '../BaseScreen';
import Drawer from './drawer';
import {EventApp} from '@services';

export default (props) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    const {navigation} = props;
    EventApp.OnToScreen((name, data) => {
      navigation.push(name, data);
    });
  });

  return <Drawer />;
};
