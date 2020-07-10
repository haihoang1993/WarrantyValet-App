/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BaseScreen from '../BaseScreen';
import { DetailProduct as AddProductsView, IconBackHeader } from '@compoents';
import { ApiHepler } from '@helpers';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { ProductReduxAll } from '@redux';


const AddProducts = (props) => {
  const { navigation, route: { params: product }, updateProduct } = props;
  const [productMain, setProductMain] = useState(null);
  const { addProduct } = props;
  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const title = 'Product';
    navigation.setOptions({
      title: title,
      headerLeft: () => <IconBackHeader {...props} />,
      headerRight: () => <View />,
    });
  }, [navigation]);

  useEffect(() => {
    setTimeout(function () {
      setProductMain(product);
    }, 300);

  }, [])

  const getProductUpdate = async () => {
    try {
      const res = await ApiHepler.GetProduct(product.p_id);
      console.log(res.data);
      const { data } = res
      return data;
    } catch (error) {
      console.log('res error:', error);
      throw error;
    } 
  }

  const onSubmitApi = async (data) => {
    setLoading(true);
    try {
      const { p_id } = product;
      const res = await ApiHepler.UpdateProduct({ ...data, ...{ p_id: p_id } });
      console.log('add res:', res);
      const { data: newData } = res;
      const toastContent = 'Updated Product successful!';
      Toast.show(toastContent, 3);
      // console.log('add res: obj', newData.data);
      // addProduct(newData.data);
      const newProduct=await getProductUpdate()
      console.log('newProduct:',newProduct);
      if (updateProduct)
           updateProduct(newProduct);
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
        }}>
        {productMain && (<AddProductsView isLoading={isLoading} onSubmitUpdate={(data) => {
          // const checkVali = Utils.validateObj(data, ['p_title',
          //   'receipt_photos',
          //   'product_photos', 'information_photos', 'actual_product_photos', 'additional_photos'])

          // console.log('check vali:',checkVali);
          // if (checkVali) {
          //   onSubmitApi(data);
          // }
          onSubmitApi(data);
          // getProductUpdate();

          // console.log("test data:",data);

        }} product={product} />)}

      </View>
    </SafeAreaView>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProduct: (obj) => {
      dispatch(ProductReduxAll.ActionsProduct.updateProduct(obj))
    }
  };
};


const AddContainer = connect(
  null,
  mapDispatchToProps,
)(AddProducts);

export default AddContainer;
