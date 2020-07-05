import { SET_PLANS } from './actionTypes';

export const setListPlan = (list = []) => {
  return {
    type: SET_PLANS,
    value: list,
  };
};
