import {INCREMENT, DECREMENT} from '../actions/actionTypes';
import {setvalueAction} from '../actions';

//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import {takeEvery, takeLatest, put} from 'redux-saga/effects';

function* increment(actions) {
  console.log('This is increment saga', actions);
  yield put(setvalueAction(2));
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* decrement(actions) {
  console.log('This is decrement saga', actions);
  yield put(setvalueAction(-2));
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}
