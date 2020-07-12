import { SET_USER, GET_USER } from '../User/actionTypes';
import { setUser } from '../User/actions';
import { StorageDB, ApiHepler } from '@helpers';
//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { takeEvery, takeLatest, put } from 'redux-saga/effects';


function* getUser(actions) {
  console.log('This is  saga', actions);
  const user = yield StorageDB.getUserLogin();
  const { token }= user;
  try {
    const res=yield ApiHepler.GetUserInfo(token);
    console.log('res user saga',res);
    const {data}= res;
    const newUser={...user,...data};
    yield put(setUser(newUser));
  } catch (error) {
    
  }
  // yield put(setvalueAction(-2));
}

export function* watchGetUser() {
  console.log('This is  saga waccht');
  yield takeLatest(GET_USER, getUser);
}
