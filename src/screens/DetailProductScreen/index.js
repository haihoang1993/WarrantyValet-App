/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import BaseScreen from '../BaseScreen';
import {DetailProduct as AddProductsView, IconBackHeader} from '@compoents';

const AddProducts =(props)=>{
  const { navigation, route: { params: product } } = props;

  useLayoutEffect(() => {
    const title = 'Product';
    navigation.setOptions({
      title: title,
      headerLeft: () => <IconBackHeader {...props} />,
    });
  }, [navigation]);

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
