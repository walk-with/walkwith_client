import React from 'react';
import {Provider} from 'react-redux';
import AppNav from './nav/Navigator';
import store from './redux/configureStore';
// declare var global: {HermesInternal: null | {}};
import {Dimensions} from 'react-native';
export const width = Dimensions.get('window').width;

const App = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};

export default App;
