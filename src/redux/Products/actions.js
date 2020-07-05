import { SET_PRODUCT } from './actionTypes';

export const setListProducts = (list = []) => {
  return {
    type: SET_PRODUCT,
    value: list,
  };
};
