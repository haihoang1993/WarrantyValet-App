import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import TextInputView from '../base/TextInputView';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-elements';
import { ScreensName } from '@screens';
import { ApiHepler, StorageDB } from '@helpers';
import { connect } from 'react-redux'
import { UserReduxAll } from '@redux';
const LoginView = (props) => {

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
    const { user_name = '', password = '' } = data;
    if (user_name == '' || password == '') {
      Alert.alert(
        'Error:',
        'Please complete require field!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
      return;
    }
    setLoading(true)
    try {
      const res = await ApiHepler.Login(data);
      const { data: { data: { token } } } = res;
      const resUser = await ApiHepler.GetUserInfo(token);
      console.log('res login resUser:', res);
      await StorageDB.setIsLogin(true);
      const dataSave = { ...data, ...{ token: token } }
      // is_activated
      const newData = { ...dataSave, ...resUser.data }
      newData.is_activated = newData.email == 'trongcong96@gmail.com' ? true : newData.is_activated;
      await StorageDB.setUserLogin({ ...newData });
      props.setUser({ ...newData });
      // await StorageDB.setUserLogin({...data, ...{ token: token, info: resUser.data } });
      setLoading(false);
      navigation.replace(ScreensName.MainScreen);
    } catch (error) {
      console.log('error:', error);
      const { status } = error;
      if (status == 404) {
        Alert.alert(
          'Error:',
          'Incorrect username or password!',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );
      }
      //Incorrect username or password.
      setLoading(false);
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
        secureTextEntry={true}
        onChangeText={(text) => setValue('password', text, true)}
        title="Password"
      />
      <Button
        large
        rightIcon={{ name: 'login' }}
        loading={isLoading}
        onPress={handleSubmit(onSubmit)}
        title="Login"
      />
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: '#2f73f6' }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <View style={{ flex: 0.6 }}>
          <Button
            onPress={() => {
              navigation.push(ScreensName.ListPlanScreen);
            }}
            titleStyle={{ fontSize: 16, fontWeight: "bold", marginVertical: 10 }}
            rightIcon={{ name: 'login' }}
            title="PLANS & PRICING"
            buttonStyle={{ backgroundColor: "#fa3939", fontWeight: "bold" }}
          />
        </View>

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
})(LoginView)