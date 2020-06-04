import React from 'react';

import {NavigationApp} from '@screens';

//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './redux/reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/rootSaga';

//Middleware
const sagaMiddleware = createSagaMiddleware();
//add Middleware in store
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

// let store = createStore(allReducers);

const App = () => (
  <Provider store={store}>
    <NavigationApp />
  </Provider>
);

export default class AppSaga extends React.Component {
  render() {
    return <App />;
  }
}

sagaMiddleware.run(rootSaga); //Chạy xuyên suốt các hàm rootSaga trong app
// export default NavigationApp;
