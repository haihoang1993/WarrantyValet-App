/* eslint-disable react-native/no-inline-styles */
import React, { useState, useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { AddTickets as AddProductsView, IconBackHeader } from '@compoents';
import { connect } from 'react-redux';
import { StorageDB, ApiHepler, EventHelper } from '@helpers';
import Toast from 'react-native-simple-toast';
import { TicketsReduxAll } from '@redux'
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

  const { listProucts, navigation,addNewTicket } = props;
  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const title = 'Add New Tickets';
    navigation.setOptions({
      title: title,
      headerLeft: () => <IconBackHeader {...props} />,
      headerRight: () => <View />,
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
        console.log('add res ticket:', res);
        const { data } = res;
        // EventHelper.EmitCreateTicket(data.data);
        if(addNewTicket)
          addNewTicket(data.data);
        const toastContent = 'Created ticket successful!';
        Toast.show(toastContent, 3);
        navigation.pop(1);
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
          padding: 10,
        }}>
        <AddProductsView isLoading={isLoading} onSubmit={(data) => {
          const check = validateObj(data, ['t_title', 't_product_id', 't_content']);
          // console.log('check validate', da);
          console.log('check validate', check);
          //Please complete require field!
          if (check) {
            onAddTicket(data);
          } else {
            Alert.alert(
              'Alert:',
              'Please complete require field!',
              [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
              ],
              { cancelable: false }
            );
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
  (dispatch) => {
    return {
      addNewTicket: (newTicket) => {
        dispatch(TicketsReduxAll.ActionsTicket.addTicket(newTicket))
      }
    }
  },
)(AddTicketsScreen);

export default TicketsContainer;
