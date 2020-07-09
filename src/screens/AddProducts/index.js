/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { AddProducts as AddProductsView, IconBackHeader } from '@compoents';
import { Utils } from '@common';
import { ApiHepler } from '@helpers';
import { ProductReduxAll } from '@redux';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';

const AddProducts = (props) => {
  const { navigation ,addProduct} = props;
  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const title = 'Add New Product';
    navigation.setOptions({
      title: title,
      headerLeft: () => <IconBackHeader {...props} />,
    });
  }, [navigation]);

  const onSubmitApi = async (data) => {
    setLoading(true);
    try {
      const res = await ApiHepler.AddProductNew(data);
      console.log('add res:', res);
      const {data:newData}=res;
      const toastContent = 'Created Product successful!';
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
        }}>
        <AddProductsView isLoading={isLoading} onSubmit={(data) => {
          const checkVali = Utils.validateObj(data, ['p_title',
            'receipt_photos',
            'product_photos', 'information_photos', 'actual_product_photos', 'additional_photos'])
          // console.log('check vali:',checkVali);
          if(checkVali){
            onSubmitApi(data);
          }
            // onSubmitApi({p_title:'tesst'});
        }} />
      </View>
    </SafeAreaView>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    addProduct:(obj)=>{
      dispatch(ProductReduxAll.ActionsProduct.addProduct(obj))
    }
  };
};


const AddContainer = connect(
  null,
  mapDispatchToProps,
)(AddProducts);

export default AddContainer;
