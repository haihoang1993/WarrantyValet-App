import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import TextInputView from '../base/TextInputView';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-elements';
import { ScreensName } from '@screens';
import { ApiHepler,StorageDB } from '@helpers';
export default (props) => {
  const { register, setValue, handleSubmit, errors } = useForm();
  const { onSubmitApi,isLoading=false }=props;

  const onSubmit = (data) => {
    // Alert.alert('Form Data', JSON.stringify(data))
    if(onSubmitApi)
        onSubmitApi(data);
  };

  const { navigation } = props;

  useEffect(() => {
    register({ name: 'email' }, { required: false });
    register({ name: 'password' });
    register({ name: 'password_repeat' });
  }, [register]);
  return (
    <View>
      <TextInputView
        onChangeText={(text) => setValue('email', text, true)}
        title="Email address"
      />
      <TextInputView
        secureTextEntry={true}
        onChangeText={(text) => setValue('password', text, true)}
        title="Password"
      />
      <TextInputView
        secureTextEntry={true}
        onChangeText={(text) => setValue('password_repeat', text, true)}
        title="Password Repeat"
      />
      {/* <Button
        large
        rightIcon={{name: 'Sign Up'}}
        onPress={handleSubmit(onSubmit)}
        title="Login"
      /> */}
      <Button
        onPress={
          // navigation.replace(ScreensName.MainScreen);
          handleSubmit(onSubmit)
        }
        style={{ marginVertical: 10 }}
        large
        loading={isLoading}
        rightIcon={{ name: 'login' }}
        title="Sign Up"
      />
    </View>
  );
};
