import { SET_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT } from './actionTypes';

const ListProductsReducers = (listPlans = [], action) => {
  console.log('ListProductsReducers', action);
  switch (action.type) {
    case SET_PRODUCT:
      // return [...listPlans, ...action.value];
      return [...action.value];
    case DELETE_PRODUCT:
      listPlans.splice(action.value);
      console.log('deleteed:', listPlans);
      return [...listPlans]
    case ADD_PRODUCT:
      // listPlans.pop(action.value)
      return [...[action.value], ...listPlans];
    default:
      return listPlans;
  }
};

export default ListProductsReducers;
