import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import TextInputView from '../base/TextInputView';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-elements';
import { ScreensName } from '@screens';
import { ApiHepler, StorageDB } from '@helpers';

export default (props) => {

  const { navigation } = props;
  const [isLoading, setLoading] = useState(false);
  const { register, setValue, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    // Alert.alert('Form Data', JSON.stringify(data))
    await login(data);
  };

  useEffect(() => {
    register({ name: 'user_name' }, { required: false });
    register({ name: 'password' });
    test();
  }, [register]);

  const login = async (data) => {
    setLoading(true)
    try {
      const res = await ApiHepler.Login(data);
      const { data: { data: { token } } } = res;
      console.log('login app:', token);
      await StorageDB.setIsLogin(true);
      await StorageDB.setUserLogin({ ...data, ...{ token: token } });
      setLoading(false);
      navigation.replace(ScreensName.MainScreen);
    } catch (error) {
      setLoading(false);
      console.log('login app error:', error);
    };
  }

  const test = () => {
    setValue('user_name', 'trongcong96@gmail.com', true);
    setValue('password', 'maimainhe', true)
  }

  return (
    <View>
      <TextInputView
        onChangeText={(text) => setValue('user_name', text, true)}
        title="Username"
      />
      <TextInputView
        onChangeText={(text) => setValue('password', text, true)}
        title="Password"
      />
      <Button
        large
        rightIcon={{ name: 'login' }}
        loading={isLoading}
        onPress={handleSubmit(onSubmit)}
        // onPress={async () => {
        //   // navigation.replace(ScreensName.MainScreen);
        //   await loginTest();
        // }}
        title="Login"
      />
      {/* <Button
        style={{marginVertical: 10}}
        large
        rightIcon={{name: 'login'}}
        title="Sign Up"
      /> */}
    </View>
  );
};
