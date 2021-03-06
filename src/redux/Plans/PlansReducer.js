import { SET_VALUE } from './actionTypes';

const ListProductsReducers = (listPlans = [], action) => {
  switch (action.type) {
    case SET_VALUE:
      return [...listPlans, ...action.value];
    default:
      return listPlans;
  }
};

export default ListProductsReducers;
