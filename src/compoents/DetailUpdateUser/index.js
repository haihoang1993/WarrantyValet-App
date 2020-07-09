import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import TextInputView from '../base/TextInputView';
import PickerImage from '../base/PickerImage';
import { useForm } from 'react-hook-form';
import { Button, CheckBox } from 'react-native-elements';

export default (props) => {

  const { isLoading = false, onSubmit: onSubmitData, user: { info: { data: userInfo } } } = props
  const { register, setValue, handleSubmit, errors } = useForm();
  const [isChecked, setChecked] = useState(false);
  const onSubmit = (data) => {
    console.log('Form Data', data);
    console.log('Form Data', data.length);
    // Alert.alert('Form Data', JSON.stringify(data))
    onSubmitData(data);
  };

  useEffect(() => {
    register({ name: 'p_title' }, { required: false });
    
  }, [register]);
  return (
    <View>
      <ScrollView>
        <TextInputView
          name='first_name'
          onChangeText={(text) => setValue('p_title', text, true)}
          title="First name:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />
        <TextInputView
          name='last_name'
          onChangeText={(text) => setValue('p_title', text, true)}
          title="Last name:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />
        <TextInputView
          name='display_name'
          value={userInfo.display_name}
          onChangeText={(text) => setValue('p_title', text, true)}
          title="Display name:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />

        <TextInputView
          name='email'
          value={userInfo.user_email}
          onChangeText={(text) => setValue('p_title', text, true)}
          title="Email addres:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />
        <TextInputView
          name='address'
          onChangeText={(text) => setValue('p_title', text, true)}
          title="Address:"
          onChangeTextForm={(name, text) => {
            setValue(name, text, true)
          }}
        />
        <TextInputView
          name='phone'
          onChangeText={(text) => setValue('p_title', text, true)}
          title="Phone:"
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
