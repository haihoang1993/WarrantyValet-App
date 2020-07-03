import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import { ListProducts, AppBarDraw, LoadingView } from '@compoents';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { EventApp, StorageDB, ApiApp } from '@helpers';
const axios = require('axios');

const Type_Load = {
  LOADING: 1,
  LOAD_MORE: 2,
  LOAD_REFFES: 3,
}

export default function ProductsScreen(props) {

  const [isLoaing, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [data, setData] = useState([]);

  const getListProducts = async (type = Type_Load.LOADING) => {

    if (type == Type_Load.LOADING)
      setLoading(true);
    else if (type == Type_Load.LOAD_REFFES)
      setRefreshing(true);
    const user = await StorageDB.getUserLogin();

    try {
      const res = await ApiApp.GetProducts(user.token);
      console.log('product:', res);
      const { data: { products } } = res;
      setData(products);

    } catch (error) {

      console.log('error product:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  const onRefresh = () => {
    getListProducts(Type_Load.LOAD_REFFES);
  }

  useEffect(() => {

    getListProducts();
  }, []);

  return (
    <>
      <AppBarDraw title="Products" {...props} />
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="white"
            />
          }>
          {(!isLoaing) && (<ListProducts data={data} />)}
        </ScrollView>
        <ActionButton
          onPress={() => {
            EventApp.EmitToScreen('AddProducts', {});
          }}
          buttonColor="rgba(231,76,60,1)"
        />
        {(isLoaing) && (<LoadingView />)}
      </View>
    </>
  );
}
