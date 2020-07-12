import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, RefreshControl, Alert } from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import { ListProducts, AppBarDraw, LoadingView, ViewErrorUserActive } from '@compoents';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { EventHelper, StorageDB, ApiHepler } from '@helpers';
const axios = require('axios');
import { ProductReduxAll, UserReduxAll } from '@redux';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';


function ProductsScreen(props) {
  console.log('ProductsScreen:', props);
  const [isLoaing, setLoading] = useState(false);
  const [isLoaingApp, setLoadingApp] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // const [data, setData] = useState([]);
  const data = props.listProucts;
  const { userCurent} = props;
  console.log('user curent;',userCurent);
  // props.getUser();


  useEffect(() => {

  }, []);

  return (
    <>
      <AppBarDraw title="User Active" {...props} />
      <View
        style={{
          flex: 1,
        }}>
          <ViewErrorUserActive></ViewErrorUserActive>
      
        {(isLoaing) && (<LoadingView />)}
      </View>
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    userCurent: state.UserReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => {
      dispatch({ type: UserReduxAll.TypeActions.GET_USER, value: { test: 'test' } })
    }
  };
};


const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsScreen);

export default ProductContainer;