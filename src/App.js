import React, { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';

import { NavigationApp, ScreensName } from '@screens';
import { StorageDB } from '@helpers';

import { Provider as PaperProvider } from 'react-native-paper';
import { Theme } from '@common';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './redux/reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/rootSaga';

//Middleware
const sagaMiddleware = createSagaMiddleware();
//add Middleware in store
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

// let store = createStore(allReducers);

const App = () => {
  // SplashScreen.show()
  const [initPage, setInitPage] = useState(null);

  useEffect(() => {
    async function getData() {
      const isLogin = await StorageDB.isLogin();
      SplashScreen.hide();
      setInitPage(isLogin ? ScreensName.MainScreen : ScreensName.PrewScreen);
    }
    getData();
  }, []);

  return (
    <PaperProvider theme={Theme.light}>
      <Provider store={store}>
        <NavigationContainer>
          {initPage && <NavigationApp initPage={initPage} />}
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  )
};

export default class AppSaga extends React.Component {
  render() {
    return <App />;
  }
}

sagaMiddleware.run(rootSaga);
// export default NavigationApp;
