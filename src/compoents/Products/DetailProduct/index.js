import React, {useEffect} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import TextInputView from '../../base/TextInputView';
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
      <ScrollView>
        <TextInputView
          onChangeText={(text) => setValue('username', text, true)}
          title="Product Title"
        />
        <TextInputView
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setValue('username', text, true)}
          title="Product Description"
        />
        <PickerImage title="Receipt Photo" />
        <PickerImage title="Warranty Page Information Photo" />
        <PickerImage title="Product Photo" />
        <PickerImage numPhotos={2} title="Actual Product Photos" />
        <PickerImage numPhotos={2} title="Additional photos (option)" />
        <Button
          large
          rightIcon={{name: 'login'}}
          onPress={handleSubmit(onSubmit)}
          title="Add"
        />
      </ScrollView>
    </View>
  );
};
