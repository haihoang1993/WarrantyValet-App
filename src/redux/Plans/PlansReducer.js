import {SET_VALUE} from './actionTypes';

//state không thay đổi, chỉ trả về giá trị cuối cùng
const counterReducers = (listPlans = [], action) => {
  switch (action.type) {
    case SET_VALUE:
      return [...listPlans, ...action.value];
    default:
      return listPlans;
  }
};

export default counterReducers;
