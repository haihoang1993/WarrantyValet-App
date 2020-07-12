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
      headerRight: () => <View />,
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
      const res = await ApiHepler.UpdateUser(data);
      console.log('add res:', res);
      const { data: newData } = res;
      const toastContent = 'Upate User successful!';
      Toast.show(toastContent, 3);
      console.log('add res Upate User:', newData.data);
      // addProduct(newData.data);
      // navigation.pop(1);
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
        }}>
        <View style={{backgroundColor:'#f44336',marginBottom:5, padding:5}}><Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Please go to the mailbox verify your email address and complete the registration process!</Text></View>
        {(user) && (<DetailUpdateUserView user={user} isLoading={isLoading} onSubmit={(data) => {
          onSubmitApi(data);
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
