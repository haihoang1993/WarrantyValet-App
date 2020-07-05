import { SET_PRODUCT } from './actionTypes';

const ListProductsReducers = (listPlans = [], action) => {
  switch (action.type) {
    case SET_PRODUCT:
      // return [...listPlans, ...action.value];
      return [...action.value];
    default:
      return listPlans;
  }
};

export default ListProductsReducers;
