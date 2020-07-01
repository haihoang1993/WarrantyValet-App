import React, {useEffect} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import TextInputView from '../base/TextInputView';
import PickerImage from '../base/PickerImage';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-elements';
// import DropDownPicker from 'react-native-dropdown-picker';
// import {Dropdown} from 'react-native-material-dropdown';

export default (props) => {
  const {register, setValue, handleSubmit, errors} = useForm();
  const onSubmit = (data) => Alert.alert('Form Data', JSON.stringify(data));
  useEffect(() => {
    register({name: 'username'}, {required: true});
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
        <TextInputView
          onChangeText={(text) => setValue('username', text, true)}
          title="Select Product"
        />
        {/* <Dropdown label="Favorite Fruit" data={data} /> */}
        <PickerImage numPhotos={2} title="Photos" />
        <TextInputView
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setValue('username', text, true)}
          title="Content"
        />
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
