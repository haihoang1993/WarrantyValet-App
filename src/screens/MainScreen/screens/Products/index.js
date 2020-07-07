import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, RefreshControl, Alert } from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import { ListProducts, AppBarDraw, LoadingView } from '@compoents';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { EventHelper, StorageDB, ApiHepler } from '@helpers';
const axios = require('axios');
import { ProductReduxAll } from '@redux';
import { connect } from 'react-redux';

const Type_Load = {
  LOADING: 1,
  LOAD_MORE: 2,
  LOAD_REFFES: 3,
}

function ProductsScreen(props) {
  console.log('ProductsScreen:', props);
  const [isLoaing, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // const [data, setData] = useState([]);
  const data = props.listProucts;

  const getListProducts = async (type = Type_Load.LOADING) => {

    if (type == Type_Load.LOADING) {
      setLoading(true);
    }
    else if (type == Type_Load.LOAD_REFFES) {
      setRefreshing(true);
    }
    const user = await StorageDB.getUserLogin();

    try {

      const res = await ApiHepler.GetProducts(user.token);
      const { data: { products } } = res;
      // setData(products);
      props.setListProucts(products);
    } catch (error) {

    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  const removeProduct = (item, pos) => {
    Alert.alert(
      'Alert',
      'Are you sure you want to delete this product?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
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
          {(!isLoaing) && (<ListProducts removeItem={removeProduct} data={data} />)}
        </ScrollView>
        <ActionButton
          onPress={() => {
            EventHelper.EmitToScreen('AddProducts', {});
          }}
          buttonColor="rgba(231,76,60,1)"
        />
        {(isLoaing) && (<LoadingView />)}
      </View>
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    listProucts: state.ProductsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setListProucts: (listPans) => {
      dispatch(ProductReduxAll.ActionsProduct.setListProducts(listPans))
    }
  };
};


const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsScreen);

export default ProductContainer;