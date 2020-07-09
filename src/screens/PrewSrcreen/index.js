import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, } from 'react-native';
import BaseScreen from '../BaseScreen';
import { ListPlans, LoadingView } from '@compoents';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { ScreensName } from '@screens';
import { ApiHepler } from '@helpers';
import { Device, Images } from '@common';

const ListPlansScreen = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [listPlans, setPlans] = useState([]);

  useEffect(() => {
    const getData = async () => {
    }
    getData();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingTop: 100
        }}>
        <View
          style={{
            flex: 0.4,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 50,
          }}>
          <Image
            style={{
              width: 350,
            }}
            resizeMode="contain"
            source={Images.LogoApp}
          />
        </View>
        <View>
          <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 0.5, marginRight: 3 }}>
              <Button
                onPress={() => {
                  navigation.push(ScreensName.LoginScreen);
                }}
                titleStyle={{ fontSize: 20, fontWeight: "bold", marginVertical: 5 }}

                rightIcon={{ name: 'login' }}
                title="LOGIN"
              />
            </View>
            <View style={{ flex: 0.5, marginLeft: 3 }}>
              <Button
                onPress={() => {
                  navigation.push(ScreensName.SignUpScreen);
                }}
                titleStyle={{ fontSize: 20, fontWeight: "bold", marginVertical: 5 }}

                rightIcon={{ name: 'LOGIN' }}
                title="REGISTER"
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <View style={{ flex: 0.7 }}>
              <Button
                onPress={() => {
                  navigation.push(ScreensName.ListPlanScreen);
                }}
                titleStyle={{ fontSize: 23, fontWeight: "bold", marginVertical: 10 }}
                rightIcon={{ name: 'login' }}
                title="PLANS & PRICING"
                buttonStyle={{ backgroundColor: "#fa3939", fontWeight: "bold" }}
              />
            </View>

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
