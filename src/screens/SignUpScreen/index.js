/* eslint-disable react-native/no-inline-styles */
import _ from 'lodash';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  View,
  SafeAreaView,
  Alert,
  Image,
} from 'react-native';
import { SignupForm, IconBackHeader, DialogText } from '@compoents';
import { connect } from 'react-redux';
// import {Button} from 'react-native-elements';
import { Images } from '@common';
import { Utils } from '@common';
import { ApiHepler, StorageDB } from '@helpers';
import { ScreensName } from '@screens';


const SignUpScreen = (props) => {
  const { navigation } = props;
  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const title = 'Register';
    navigation.setOptions({
      title: title,
      headerLeft: () => <IconBackHeader {...props} />,
      headerRight: () => <View />,
    });
  }, [navigation]);


  const login = async (data) => {
    const res = await ApiHepler.Login({ ...data, ...{ user_name: data.email } });
    const { data: { data: { token } } } = res;
    const resUser = await ApiHepler.GetUserInfo(token);
    console.log('res login resUser:', res);
    await StorageDB.setIsLogin(true);
    const dataSave = { ...data, ...{ token: token } }
    await StorageDB.setUserLogin({ ...dataSave, ...resUser.data });
    setLoading(false);
    navigation.replace(ScreensName.DetailUpdateUser);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          }}>
          <Image
            style={{
              width: 300,
            }}
            resizeMode="contain"
            source={Images.LogoApp}
          />
        </View>
        <View style={{ marginHorizontal: 35 }}>
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
                  const res = await ApiHepler.SignUp({ ...data, ...{ user_nicename: data.email } });
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
    </SafeAreaView>
  );
};

export default SignUpScreen;
