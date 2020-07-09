import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import TextInputView from '../base/TextInputView';
import PickerImage from '../base/PickerImage';
import { useForm } from 'react-hook-form';
import { Button, CheckBox } from 'react-native-elements';

export default (props) => {
  const { isLoading = false, onSubmit: onSubmitData } = props
  const { register, setValue, handleSubmit, errors } = useForm();
  const [isChecked,setChecked]=useState(false);
  const onSubmit = (data) => {
    console.log('Form Data', data);
    console.log('Form Data', data.length);
    // Alert.alert('Form Data', JSON.stringify(data))
    onSubmitData(data);
  };
  useEffect(() => {
    register({ name: 'p_title' }, { required: false });
    register({ name: 'receipt_photos' }, { required: false });
    register({ name: 'product_photos' }, { required: false });
    register({ name: 'information_photos' }, { required: false });
    register({ name: 'actual_product_photos' }, { required: false });
    register({ name: 'additional_photos' }, { required: false });
    register({ name: 'authorize_valetwarranty' }, { required: false });
    setValue('authorize_valetwarranty', false);
  }, [register]);
  return (
    <View>
      <ScrollView>
        <TextInputView
          onChangeText={(text) => setValue('p_title', text, true)}
          title="Product Title"
        />
        <PickerImage onChangeData={(data) => {
          setValue('receipt_photos', data);
        }} title="Receipt Photo" />
        <PickerImage onChangeData={(data) => {
          setValue('information_photos', data)
        }} title="Warranty Page Information Photo" />
        <PickerImage onChangeData={(data) => {
          setValue('product_photos', data)
        }} title="Product Photo" />
        <PickerImage onChangeData={(data) => {
          setValue('actual_product_photos', data)
        }} numPhotos={2} title="Actual Product Photos" />
        <PickerImage onChangeData={(data) => {
          setValue('additional_photos', data)
        }} numPhotos={2} title="Additional photos (option)" />
        <View style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
          <CheckBox
            onPress={()=>{
              setValue('authorize_valetwarranty', !isChecked)
              setChecked(!isChecked)
            }}
            title="Do you authorize ValetWarranty to submit the product registration & TOS"
            checked={isChecked}
          />
        </View>
        <Button
          loading={isLoading}
          large
          rightIcon={{ name: 'login' }}
          onPress={handleSubmit(onSubmit)}
          title="Add"
        />
      </ScrollView>
    </View>
  );
};
