import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import TextInputView from '../base/TextInputView';
import PickerImage from '../base/PickerImage';
import { useForm } from 'react-hook-form';
import { Button, CheckBox } from 'react-native-elements';

export default (props) => {

  const { isLoading = false, onSubmit: onSubmitData, user:userInfo } = props;
  const { first_name, last_name, display_name, address, phone } = userInfo;
  const { register, setValue, handleSubmit, errors } = useForm();
  const [isSegister,setRegistered]=useState(false);
  const onSubmit = (data) => {
    console.log('Form Data', data);
    // console.log('Form Data', data.length);
    // Alert.alert('Form Data', JSON.stringify(data))
    onSubmitData(data);
  };

  useEffect(() => {
    register({ name: 'first_name' }, { required: false });
    register({ name: 'last_name' }, { required: false });
    register({ name: 'display_name' }, { required: false });
    register({ name: 'email' }, { required: false });
    register({ name: 'address' }, { required: false });
    register({ name: 'phone' }, { required: false });
    setRegistered(true);
  }, [register]);
  if(!isSegister) 
      return (<View></View>)
  return (
    <View style={{marginHorizontal:15}}>
      <ScrollView>
        <TextInputView
          value={first_name}
          name='first_name'
          title="First name:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />
        <TextInputView
          value={last_name}
          name='last_name'
          title="Last name:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />
        <TextInputView
          name='display_name'
          value={userInfo.display_name}
          title="Display name:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />

        <TextInputView
          name='email'
          value={userInfo.email}
          title="Email addres:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />
        <TextInputView
          value={address}
          name='address'
          title="Address:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />
        <TextInputView
          name='phone'
          title="Phone:"
          value={phone}
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />

        <Button
          loading={isLoading}
          large
          rightIcon={{ name: 'login' }}
          onPress={handleSubmit(onSubmit)}
          title="Update"
        />
      </ScrollView>
    </View>
  );
};
