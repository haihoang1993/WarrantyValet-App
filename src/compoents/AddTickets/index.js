import React, { useEffect } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import TextInputView from '../base/TextInputView';
import PickerImage from '../base/PickerImage';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';

export default AddTickerCompents = (props) => {
  const { listProduct, isLoading = false, onSubmit } = props;
  const { register, setValue, handleSubmit, errors } = useForm();

  const submit = (data) => {
    // Alert.alert('Form Data', JSON.stringify(data))
    onSubmit(data);
  };

  useEffect(() => {
    register({ name: 't_title' }, { required: false });
    register({ name: 't_product_id' }, { required: false });
    register({ name: 't_content' }, { required: false });
    register({ name: 'photos' }, { required: false });
  }, [register]);

  return (
    <View>
      <ScrollView>
        <TextInputView
          onChangeText={(text) => setValue('t_title', text, true)}
          title="Ticket Title"
        />
        <DropDownPicker
          items={listProduct.map(e => {
            return {
              ...e, ...{ value: e.p_id, label: e.p_title }
            }
          })}
          defaultIndex={0}
          containerStyle={{ height: 50, marginVertical: 10 }}
          onChangeItem={item => {
            setValue('t_product_id', item.value);
          }}
        />

        <TextInputView
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setValue('t_content', text, true)}
          title="Content"
        />

        <PickerImage onChangeData={(data) => {
            setValue('photos',data);
        }} numPhotos={2} title="Photos" />
        
        <Button
          loading={isLoading}
          large
          rightIcon={{ name: 'login' }}
          onPress={handleSubmit(submit)
          }
          title="Add"
        />
      </ScrollView>
    </View>
  );
};

AddTickerCompents.PropTypes = {
  listProduct: PropTypes.array,
};