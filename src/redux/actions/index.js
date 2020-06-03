import {INCREMENT, DECREMENT, SET_VALUE} from './actionTypes';

// Tăng với giá trị step
export const increaseAction = (step) => {
  return {
    type: INCREMENT,
    step: step,
  };
};

// Giảm với giá trị step
export const decreaseAction = (step) => {
  return {
    type: DECREMENT,
    step: step,
  };
};

// Giảm với giá trị step
export const setvalueAction = (num) => {
  return {
    type: SET_VALUE,
    value: num,
  };
};
