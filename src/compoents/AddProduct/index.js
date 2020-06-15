import React, {useEffect} from 'react';
import {View, Alert} from 'react-native';
import TextInputView from '../base/TextInputView';
import PickerImage from '../base/PickerImage';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-elements';

export default (props) => {
  const {register, setValue, handleSubmit, errors} = useForm();
  const onSubmit = (data) => Alert.alert('Form Data', JSON.stringify(data));

  useEffect(() => {
    register({name: 'username'}, {required: true});
  }, [register]);
  return (
    <View>
      <TextInputView
        onChangeText={(text) => setValue('username', text, true)}
        title="Product Title"
      />
      <PickerImage title="Receipt Photo" />
      <Button
        large
        rightIcon={{name: 'login'}}
        onPress={handleSubmit(onSubmit)}
        title="Add"
      />
    </View>
  );
};
