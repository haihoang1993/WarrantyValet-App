import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import BaseScreen from '../BaseScreen';
import {LoginForm} from '@compoents';
import {connect} from 'react-redux';
// import {Button} from 'react-native-elements';

class LoginScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={{marginHorizontal: 40}}>
            <LoginForm />
            {/* <Button large rightIcon={{name: 'login'}} title="Login" />
            <Button
              style={{marginVertical: 10}}
              large
              rightIcon={{name: 'login'}}
              title="Sign Up"
            /> */}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
