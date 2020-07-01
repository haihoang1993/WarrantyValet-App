import React, {useEffect} from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import TextInputView from '../base/TextInputView';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-elements';
import {ScreensName} from '@screens';
export default (props) => {
  const {navigation} = props;
  const {register, setValue, handleSubmit, errors} = useForm();
  const onSubmit = (data) => Alert.alert('Form Data', JSON.stringify(data));
  useEffect(() => {
    register({name: 'username'}, {required: true});
    register({name: 'password'});
  }, [register]);
  return (
    <View>
      <TextInputView
        onChangeText={(text) => setValue('username', text, true)}
        title="Username"
      />
      <TextInputView
        onChangeText={(text) => setValue('password', text, true)}
        title="Password"
      />
      <Button
        large
        rightIcon={{name: 'login'}}
        // onPress={handleSubmit(onSubmit)}
        onPress={() => {
          navigation.replace(ScreensName.MainScreen);
        }}
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
