import {SET_VALUE} from '../actions/actionTypes';

//state không thay đổi, chỉ trả về giá trị cuối cùng
const counterReducers = (times = 0, action) => {
  switch (action.type) {
    case SET_VALUE:
      return times + action.value;

    default:
      return times;
  }
};

export default counterReducers;
