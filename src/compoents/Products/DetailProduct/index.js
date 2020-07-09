import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView, StyleSheet, Text } from 'react-native';
import TextInputView from '../../base/TextInputView';
import PickerImage from '../../base/PickerImage';
import PickDate from '../../base/PickDate';
import { useForm } from 'react-hook-form';
import { Button, CheckBox } from 'react-native-elements';

export default (props) => {
  const { product: { p_title = '',
    p_product_description, p_upc_code, p_purchase_date,
    p_warranty_expiration
    , p_actual_product_photos,
    p_additional_photos,
    p_product_photo,
    p_warranty_page_information_photo,
    p_receipt_photo },
    onSubmitUpdate, isLoading
  } = props;

  console.log('p_receipt_photo:', props);
  const { register, setValue, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if (onSubmitUpdate)
      onSubmitUpdate(data);
  };
  const [isChecked, setChecked] = useState(true);

  useEffect(() => {
    register({ name: 'p_title' }, { required: false });
    register({ name: 'product_description' }, { required: false });
    register({ name: 'upc_code' }, { required: false });
    register({ name: 'price' }, { required: false });
    register({ name: 'purchase_date' }, { required: false });
    register({ name: 'warranty_expiration' }, { required: false });
    register({ name: 'receipt_photos' }, { required: false });
    register({ name: 'product_photos' }, { required: false });
    register({ name: 'information_photos' }, { required: false });
    register({ name: 'actual_product_photos' }, { required: false });
    register({ name: 'additional_photos' }, { required: false });
    setValue('p_title', p_title, true)
    setValue('product_description', p_product_description, true)
    setValue('upc_code', p_upc_code, true)
    setValue('purchase_date', p_purchase_date, true)
    setValue('warranty_expiration', p_warranty_expiration, true)
    setValue('receipt_photos', p_receipt_photo);
    setValue('product_photos', p_product_photo);
    setValue('information_photos', p_warranty_page_information_photo);
    setValue('additional_photos', p_additional_photos);
  }, [register]);

  return (
    <View style={{ marginHorizontal: 10 }}>
      <ScrollView>
        <TextInputView
          onChangeTextForm={(name, text) => {
            console.log('onChangeTextForm:', name, text);
            setValue(name, text, true)
          }}
          name='p_title'
          value={p_title}
          title="Product Title"
        />
        <TextInputView
          onChangeTextForm={(name, text) => {
            console.log('onChangeTextForm:', name, text);
            setValue(name, text, true)
          }}
          value={p_product_description}
          name='product_description'
          multiline={true}
          numberOfLines={4}
          title="Product Description"
        />
        <TextInputView
          onChangeTextForm={(name, text) => {
            console.log('onChangeTextForm:', name, text);
            setValue(name, text, true)
          }}
          name="upc_code"
          title="UPC/SKU Code"
        />
        <TextInputView
          name='price'
          keyboardType="numeric"
          onChangeTextForm={(name, text) => {
            console.log('onChangeTextForm:', name, text);
            setValue(name, text, true)
          }} title="Price"
        />
        <PickDate name='purchase_date' onChangeTextForm={(name, text) => {
          console.log('onChangeTextForm:', name, text);
          setValue(name, text, true)
        }} textTime={p_purchase_date} title="Purchase Date" />

        <PickDate name='warranty_expiration' onChangeTextForm={(name, text) => {
          console.log('onChangeTextForm:', name, text);
          setValue(name, text, true)
        }} textTime={p_warranty_expiration} title="Warranty Expiration" />

        <PickerImage data={p_receipt_photo} title="Receipt Photo" />
        <PickerImage data={p_warranty_page_information_photo} title="Warranty Page Information Photo" />
        <PickerImage data={p_product_photo} title="Product Photo" />
        <PickerImage data={p_actual_product_photos} numPhotos={2} title="Actual Product Photos" />
        <PickerImage data={p_additional_photos} numPhotos={2} title="Additional photos (option)" />
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Do you authorize ValetWarranty to submit the product registration & TOS"
            checked={isChecked}
          />
        </View>
        <Button
          large
          rightIcon={{ name: 'login' }}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
          title="Update"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
