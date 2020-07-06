import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView, StyleSheet, Text } from 'react-native';
import TextInputView from '../../base/TextInputView';
import PickerImage from '../../base/PickerImage';
import PickDate from '../../base/PickDate';
import { useForm } from 'react-hook-form';
import { Button, CheckBox } from 'react-native-elements';

export default (props) => {
  const { register, setValue, handleSubmit, errors } = useForm();
  const onSubmit = (data) => Alert.alert('Form Data', JSON.stringify(data));
  const [isChecked, setChecked] = useState(true);
  useEffect(() => {
    register({ name: 'username' }, { required: true });
  }, [register]);
  return (
    <View style={{ marginHorizontal: 10 }}>
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
        <TextInputView
          onChangeText={(text) => setValue('username', text, true)}
          title="UPC/SKU Code"
        />
        <TextInputView
          keyboardType="numeric"
          onChangeText={(text) => setValue('username', text, true)}
          title="Price"
        />
        <PickDate title="Purchase Date" />
        <PickDate title="Warranty Expiration" />
        <PickerImage title="Receipt Photo" />
        <PickerImage title="Warranty Page Information Photo" />
        <PickerImage title="Product Photo" />
        <PickerImage numPhotos={2} title="Actual Product Photos" />
        <PickerImage numPhotos={2} title="Additional photos (option)" />
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
          title="Add"
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
