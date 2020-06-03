import React from 'react';
import {View, Text} from 'react-native';
import BaseScreen from '../BaseScreen';
import {ListPlans} from '@compoents';
import {connect} from 'react-redux';

class ListPlansScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }
  render() {
    return <ListPlans {...this.props} />;
  }
}

//Actions
import {increaseAction} from '../../redux/actions';
import {decreaseAction} from '../../redux/actions';

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
