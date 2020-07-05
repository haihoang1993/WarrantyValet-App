import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BaseScreen from '../BaseScreen';
import { ListPlans, LoadingView } from '@compoents';
import { Button } from 'react-native-elements';
import { ScreensName } from '@screens';
import { ApiApp } from '@helpers';
import {  PlanReduxAll } from '@redux';
import { connect } from 'react-redux';

const ListPlansScreen = (props) => {
  console.log('ListPlansScreen:', props);
  const { navigation } = props;
  const [loading,setLoading]=useState(false);
  const [listPlans,setPlans]=useState([]);

  useEffect(()=>{
    const getData=async ()=>{
      setLoading(true);
        try {
            const res=await ApiApp.GetListPlan();
            console.log('get list plan:',res);
            setPlans(res.data);
            setLoading(false);
        } catch (error) {
          setLoading(false);
        }
    }
    getData();
  },[])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between'
        }}>
        <View style={{flex:1,justifyContent:'center'}}>
          {loading && (<LoadingView />)}
          {!loading && ( <ListPlans listPlans={listPlans} {...props} />)}
            {/* <LoadingView></LoadingView> */}
        </View>
        {/* <View style={{ marginHorizontal: 15, flexDirection: 'row', flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 0.5, marginRight: 3 }}>
            <Button
              onPress={() => {
                navigation.push(ScreensName.LoginScreen);
              }}
              rightIcon={{ name: 'login' }}
              title="Login"
            />
          </View>
          <View style={{ flex: 0.5, marginLeft: 3 }}>
            <Button
              onPress={() => {
                navigation.push(ScreensName.SignUpScreen);
              }}
              rightIcon={{ name: 'login' }}
              title="Sign Up"
            />
          </View>

        </View> */}
      </View>
    </SafeAreaView>
  );
};


const mapStateToProps = (state) => {
  return {
    listPlans: state.PlansReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   setListPlans:(listPans)=>{
     dispatch(PlanReduxAll.ActionsPlan.setListPlans(listPans))
   }
  };
};


const PlansContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPlansScreen);

export default PlansContainer;
