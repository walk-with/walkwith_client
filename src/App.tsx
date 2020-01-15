import React from 'react';
import AppNav from './nav/Navigator';
// declare var global: {HermesInternal: null | {}};
import {Dimensions} from 'react-native';
export const width = Dimensions.get('window').width;

const App = () => {
  return <AppNav />;
};

export default App;
