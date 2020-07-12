import {all} from 'redux-saga/effects';

import {sayHello} from './counterSagas';
import {watchIncrement, watchDecrement} from './counterSagas';
import {watchGetUser} from './userSagas';

export default function* rootSaga() {
  yield all([watchIncrement(), watchDecrement(),watchGetUser()]);
}
