import React, { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';

import { NavigationApp, ScreensName } from '@screens';
import { StorageDB, ApiHepler } from '@helpers';

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
  const [initPage, setInitPage] = useState(null);
  const [userApp,setUserApp]=useState(null);
  // SplashScreen.show();
  async function getData() {
    const isLogin = await StorageDB.isLogin();
    if (isLogin) {
      try {
        const user = await StorageDB.getUserLogin();
        const { token } = user;
        const res = await ApiHepler.GetUserInfo(token);
        const userNew = { ...user, ...res.data };
        // userApp = userNew;
        console.log('get user app:',userApp)
        await StorageDB.setUserLogin(userNew);
        setUserApp(userNew);
      } catch (error) {
        console.log('get user app error:',error)
      } finally {
        SplashScreen.hide();
        setInitPage((isLogin) ? ScreensName.MainScreen : ScreensName.PrewScreen);

      }
    } else {
      SplashScreen.hide();
      setInitPage(ScreensName.PrewScreen);
    }

    // const { info: { is_activated } } = user;
    // console.log('check in app:', user);
    // SplashScreen.hide();
    // setInitPage(isLogin ? (is_activated == '0' ? ScreensName.DetailUpdateUser : ScreensName.MainScreen) : ScreensName.PrewScreen);
  }

  useEffect(() => {
     getData();
  }, []);

  return (
    <PaperProvider theme={Theme.light}>
      <Provider store={store}>
        <NavigationContainer>
          {initPage  && <NavigationApp userApp={userApp}  initPage={initPage} />}
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
