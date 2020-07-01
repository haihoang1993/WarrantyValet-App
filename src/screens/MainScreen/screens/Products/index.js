import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import { ListProducts,AppBarDraw } from '@compoents';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { EventApp, StorageDB } from '@helpers';

export default function ProductsScreen(props) {

  useEffect(()=>{
    const getListProducts=async ()=>{
      const user=await StorageDB.getUserLogin();
      console.log('user login:',user);
    }
    getListProducts();
  },[]);

  return (
    <>
            <AppBarDraw title="My Subscription" {...props} />
      <View
        style={{
          flex: 1,
        }}>
        <ListProducts />
        <ActionButton
          onPress={() => {
            EventApp.EmitToScreen('AddProducts', {});
          }}
          buttonColor="rgba(231,76,60,1)"
        />
      </View>
    </>
  );
}
