import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BaseScreen from '../BaseScreen';
import { ListPlans, LoadingView } from '@compoents';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { ScreensName } from '@screens';
import { ApiApp } from '@helpers';

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
        <View style={{flex:0.9,justifyContent:'center'}}>
          {loading && (<LoadingView />)}
          {!loading && ( <ListPlans listPlans={listPlans} {...props} />)}
            {/* <LoadingView></LoadingView> */}
        </View>
        <View style={{ marginHorizontal: 15, flexDirection: 'row', flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
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

        </View>
      </View>
    </SafeAreaView>
  );
};

//Actions
import { increaseAction } from '../../redux/actions';
import { decreaseAction } from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    times: state.counterReducers ? state.counterReducers : 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: (step) => {
      dispatch(decreaseAction(step));
    },
    onIncrement: (step) => {
      dispatch(increaseAction(step));
    },
  };
};
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPlansScreen);

export default CounterContainer;
