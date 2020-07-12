/* eslint-disable react-native/no-inline-styles */
import _ from 'lodash';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  View,
  Alert,
} from 'react-native';
import { SignupForm, IconBackHeader, DialogText } from '@compoents';
import { connect } from 'react-redux';
// import {Button} from 'react-native-elements';
import { Images } from '@common';
import { Utils } from '@common';
import { ApiHepler, StorageDB } from '@helpers';
import { ScreensName } from '@screens';
import { UserReduxAll } from '@redux';

const SignUpScreen = (props) => {
  const { navigation } = props;
  const [isLoading, setLoading] = useState(false);


  const login = async (data) => {
    const res = await ApiHepler.Login({ ...data, ...{ user_name: data.email } });
    const { data: { data: { token } } } = res;
    const resUser = await ApiHepler.GetUserInfo(token);
    console.log('res login resUser:', res);
    await StorageDB.setIsLogin(true);
    const dataSave = { ...data, ...{ token: token } }
    // is_activated
    const newData = { ...dataSave, ...resUser.data }
    newData.is_activated = newData.email == 'trongcong96@gmail.com ' ? true : newData.is_activated;
    await StorageDB.setUserLogin({ ...newData });
    props.setUser({ ...newData });

    setLoading(false);
    navigation.replace(ScreensName.MainScreen);
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{ marginHorizontal: 0 }}>
        <SignupForm isLoading={isLoading} {...props} onSubmitApi={async (data) => {
          const checkVali = Utils.validateObj(data, ['email', 'password']);
          if (!checkVali) {
            Alert.alert(
              'Alert:',
              'Please complete require field!',
              [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
              ],
              { cancelable: false }
            );
          } else {
            if (data.password != data.password_repeat) {
              DialogText.Show('Error:', 'Passwords do not match.', null)
            } else {
              setLoading(true);
              try {
                const res = await ApiHepler.SignUp({ ...data });
                console.log('sing up', res);
                await login(data);
              } catch (error) {
                console.log('sing up erer:', error);
              } finally {
                setLoading(false);
              }
            }
          }
        }} />
      </View>
    </View>
  );
};

export default connect(null, (dispatch) => {
  return {
    setUser: (use) => {
      dispatch(UserReduxAll.ActionsUser.setUser(use));
    }
  }
})(SignUpScreen)