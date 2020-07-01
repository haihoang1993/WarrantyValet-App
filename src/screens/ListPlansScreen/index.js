import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BaseScreen from '../BaseScreen';
import { ListPlans } from '@compoents';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { ScreensName } from '@screens';

const ListPlansScreen = (props) => {
  console.log('ListPlansScreen:', props);
  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between'
        }}>
        <ListPlans listPlans={[1, 2, 3, 4]} {...props} />
        <View style={{ marginHorizontal: 15, flexDirection: 'row', flex: 1,justifyContent:'center',alignItems:'center' }}>
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
