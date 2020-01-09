import React from 'react';
import {View} from 'react-native';
import Map from './Map';
import List from './List';
import homeStyle from '../styles/homeStyle';

const Home = () => {
  return (
    <View style={homeStyle.home}>
      <Map />
      <List />
    </View>
  );
};

export default Home;
