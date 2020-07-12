import { SET_USER } from './actionTypes';
let UserDefault= {}
const UserReducers = (user = {}, action) => {
  console.log('UserReducers', action);
  switch (action.type) {
    case SET_USER:
      return { ...action.value }
    default:
      return user;
  }
};

export default UserReducers;
