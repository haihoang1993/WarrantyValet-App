/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import BaseScreen from '../BaseScreen';
import {DetailProduct as AddProductsView} from '@compoents';

const AddProducts =(props)=>{
  const { navigation, route: { params: product } } = props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <AddProductsView product={product}/>
        </View>
      </SafeAreaView>
    );
}

export default AddProducts;
