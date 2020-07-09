/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { DetailUpdateUser as DetailUpdateUserView, IconBackHeader } from '@compoents';
import { Utils } from '@common';
import { ApiHepler } from '@helpers';
import { ProductReduxAll } from '@redux';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { StorageDB } from '@helpers';

const UserDetailScreen = (props) => {
  const { navigation, addProduct } = props;
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  useLayoutEffect(() => {
    const title = 'Account details';
    navigation.setOptions({
      title: title,
      headerLeft: () => <IconBackHeader {...props} />,
    });
  }, [navigation]);

  useEffect(() => {
    const getUser = async () => {
      const user = await StorageDB.getUserLogin();
      console.log('user info:', user);
      setUser(user);
    }
    getUser();
  }, [])

  const onSubmitApi = async (data) => {
    setLoading(true);
    try {
      const res = await ApiHepler.UpdateProduct(data);
      console.log('add res:', res);
      const { data: newData } = res;
      // const toastContent = 'Created Product successful!';
      Toast.show(toastContent, 3);
      console.log('add res: obj', newData.data);
      addProduct(newData.data);
      navigation.pop(1);
    } catch (error) {
      console.log('add res error:', error)
    } finally {
      setLoading(false);
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
          paddingHorizontal: 15
        }}>
        {(user) && (<DetailUpdateUserView user={user} isLoading={isLoading} onSubmitUpdate={(data) => {
          // const checkVali = Utils.validateObj(data, ['p_title',
          //   'receipt_photos',
          //   'product_photos', 'information_photos', 'actual_product_photos', 'additional_photos'])
         
          // console.log('check vali:',checkVali);
          // if (checkVali) {
          //   onSubmitApi(data);
          // }
          // onSubmitApi({p_title:'tesst'});

        }} />)}

      </View>
    </SafeAreaView>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (obj) => {
      dispatch(ProductReduxAll.ActionsProduct.addProduct(obj))
    }
  };
};


const UserScreenContainer = connect(
  null,
  mapDispatchToProps,
)(UserDetailScreen);

export default UserScreenContainer;
