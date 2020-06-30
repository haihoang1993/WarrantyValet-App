/* eslint-disable react-native/no-inline-styles */
import _ from 'lodash';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';
import BaseScreen from '../BaseScreen';
import {SignupForm} from '@compoents';
import {connect} from 'react-redux';
// import {Button} from 'react-native-elements';
import {Device, Images} from '@common';

const SignUpScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginVertical: 50,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}
        />
        <View style={{marginHorizontal: 35}}>
          <SignupForm {...props} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
