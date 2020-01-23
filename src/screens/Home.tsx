import React, {Component} from 'react';
import {View} from 'react-native';
import Map from './Map';
import List from './List';
import homeStyle from '../styles/homeStyle';
import {NavigationAction} from '@react-navigation/native';

interface Props {
  navigation: NavigationAction;
}
interface State {
  curMarker: number;
}
export default class Home extends Component<Props, State> {
  list = [
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

  state = {curMarker: -1};

  changeCurMarker = (id: number) => {
    this.setState({curMarker: id});
  };

  render() {
    const {curMarker} = this.state;
    return (
      <View style={homeStyle.home}>
        <Map list={this.list} changeCurMarker={this.changeCurMarker} />
        <List list={this.list} curMarker={curMarker} navigation={this.props.navigation}/>
      </View>
    );
  }
}
