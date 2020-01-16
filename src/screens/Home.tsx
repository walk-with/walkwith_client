import React from 'react';
import {View} from 'react-native';
import Map from './Map';
import List from './List';
import homeStyle from '../styles/homeStyle';
import {NavigationAction} from '@react-navigation/native';

interface Props {
  navigation: NavigationAction;
}
const Home = ({navigation}: Props) => {
  return (
    <View style={homeStyle.home}>
      <Map />
      <List navigation={navigation} />
    </View>
  );
};

export default Home;
