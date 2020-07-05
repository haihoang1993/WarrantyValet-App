import React, { useEffect } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import TextInputView from '../base/TextInputView';
import PickerImage from '../base/PickerImage';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';

export default AddTickerCompents = (props) => {
  const { listProduct } = props;
  const { register, setValue, handleSubmit, errors } = useForm();
  const onSubmit = (data) => Alert.alert('Form Data', JSON.stringify(data));
  useEffect(() => {
    register({ name: 'username' }, { required: true });
  }, [register]);

  let data = [
    {
      value: 'Banana',
    },
    {
      value: 'Mango',
    },
    {
      value: 'Pear',
    },
  ];

  return (
    <View>
      <ScrollView>
        <TextInputView
          onChangeText={(text) => setValue('username', text, true)}
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
          onChangeItem={item => console.log(item.label, item.value)}
        />
        <PickerImage numPhotos={2} title="Photos" />
        <TextInputView
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setValue('username', text, true)}
          title="Content"
        />
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

AddTickerCompents.PropTypes = {
  listProduct: PropTypes.array,
};