import { SET_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT } from './actionTypes';

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
    case UPDATE_PRODUCT:
      const find = listPlans.findIndex((item) => item.p_id == action.value.p_id);
      if (find != -1) listPlans[find] = action.value;
      return [...listPlans]
    default:
      return listPlans;
  }
};

export default ListProductsReducers;
