import React from 'react';
import {View, Text} from 'react-native';
import Map from './Map';
import List from './List';

const Home = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Map />
      <List />
    </View>
  );
};

export default Home;
