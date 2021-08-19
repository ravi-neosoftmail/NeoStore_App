/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import DrawerNavigator from './src/containers/navigation/DrawerNavigator/DrawerNavigator';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DrawerNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
