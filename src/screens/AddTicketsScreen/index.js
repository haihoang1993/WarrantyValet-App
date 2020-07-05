/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import BaseScreen from '../BaseScreen';
import {AddTickets as AddProductsView} from '@compoents';
import { ProductReduxAll } from '@redux';
import { connect } from 'react-redux';

const AddTicketsScreen= (props) => {
  const { listProucts }=props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 5,
        }}>
        <AddProductsView  listProduct={listProucts} />
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
  null,
)(AddTicketsScreen);

export default TicketsContainer;
