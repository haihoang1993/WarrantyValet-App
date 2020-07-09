/* eslint-disable react-native/no-inline-styles */
import React, { useState,useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { AddTickets as AddProductsView,IconBackHeader } from '@compoents';
import { connect } from 'react-redux';
import { StorageDB, ApiHepler } from '@helpers';
import Toast from 'react-native-simple-toast';

const validateObj = (obj, keys = []) => {
  let check = false;
  keys.forEach((value) => {
    check = (Reflect.has(obj, value) && obj[value] != undefined && obj[value] != '');
    if (!check)
      return check;
  })
  return check;
}

const formatPhotos = (list) => {
  return list.map((item) => {
    let { name, type } = item;
    name = (!name) ? new Date().getTime().toString() : name;
    name = name + '.' + ((type == 'image/png') ? 'png' : 'jpg');
    return {
      ...item, ...{ name }
    }
  })
}

const AddTicketsScreen = (props) => {

  const { listProucts, navigation } = props;
  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const title = 'Add New Tickets';
    navigation.setOptions({
      title: title,
      headerLeft: () => <IconBackHeader {...props} />,
    });
  }, [navigation]);

  const onAddTicket = async (data) => {
    const user = await StorageDB.getUserLogin();
    setLoading(true);
    // console.log('onAddTicket:', data);
    const { photos = [] } = data;
    const newData = { ...data, ...{ photos: formatPhotos(photos) } }
    // console.log('onAddTicket new data:', newData);

    if (user) {
      const { token } = user;
      try {
        const res = await ApiHepler.AddNewTicket(newData, token);
        console.log('add res:', res);
        const toastContent = 'Created ticket successful!';
        Toast.show(toastContent, 3);
        navigation.pop(1)
      } catch (error) {
        console.log('add res error:', error)
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 5,
        }}>
        <AddProductsView isLoading={isLoading} onSubmit={(data) => {
          const check = validateObj(data, ['t_title', 't_product_id', 't_content']);
          // console.log('check validate', da);
          console.log('check validate', check);
          if (check) {
            onAddTicket(data);
          } else {
            setLoading(false);
          }
        }} listProduct={listProucts} />
      </View>
    </SafeAreaView>
  );
};



const TicketsContainer = connect(
  (state) => {
    return {
      listProucts: state.ProductsReducer,
    };
  },
  null,
)(AddTicketsScreen);

export default TicketsContainer;
