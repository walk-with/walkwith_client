import React, {ReactElement, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Map from './Map';
import List from './List';
import homeStyle from '../styles/homeStyle';
import {NavigationAction} from '@react-navigation/native';
import {viewTab} from '../redux/navOption';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

interface Props {
  navigation: NavigationAction;
  viewTabbar: Function;
}

function Home({navigation, viewTabbar}: Props): ReactElement {
  const list = [
    {
      name: '오구',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      coord: {latitude: 37.543, longitude: 126.8664283},
    },
    {
      name: '뭉치',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      coord: {latitude: 37.564, longitude: 126.87},
    },
    {
      name: '예삐',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      coord: {latitude: 37.55, longitude: 126.85},
    },
    {
      name: '초코',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      coord: {latitude: 37.55, longitude: 126.85},
    },
  ];

  const changeCurMarker = (id: number) => {
    setCurMarker(id);
  };

  const [curMarker, setCurMarker] = useState(-1);

  const isFocused = useIsFocused();
  let loaded = false;
  const render = () => {
    viewTabbar();
    loaded = true;
  };
  isFocused ? render() : null;

  return loaded ? (
    <View style={homeStyle.home}>
      <Map list={list} changeCurMarker={changeCurMarker} />
      <List list={list} curMarker={curMarker} navigation={navigation} />
    </View>
  ) : (
    <View style={homeStyle.loading}>
      <ActivityIndicator />
    </View>
  );
}

const mapDispatchToProps = (dispatch: (arg0: {type: string}) => any) => ({
  viewTabbar: () => dispatch(viewTab()),
});

export default connect(null, mapDispatchToProps)(Home);
