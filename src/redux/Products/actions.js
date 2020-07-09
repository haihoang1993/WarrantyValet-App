import { SET_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT } from './actionTypes';

export const setListProducts = (list = []) => {
  return {
    type: SET_PRODUCT,
    value: list,
  };
};

export const deleteProduct = (index) => {
  console.log('deleteProduct action:',index);
  return {
    type: DELETE_PRODUCT,
    value: index
  }
}

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    value: product
  }
}