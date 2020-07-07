/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { AddProducts as AddProductsView,IconBackHeader} from '@compoents';

import { ProductReduxAll } from '@redux';
import { connect } from 'react-redux';

const AddProducts = (props) => {
  const { navigation }= props;

  useLayoutEffect(() => {
    const title = 'Add New Product';
    navigation.setOptions({
      title: title,
      headerLeft: () => <IconBackHeader {...props} />,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 5,
        }}>
        <AddProductsView />
      </View>
    </SafeAreaView>
  );
}


export default AddProducts;
