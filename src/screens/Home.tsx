import React from 'react';
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
const Home = ({navigation, viewTabbar}: Props) => {
  const isFocused = useIsFocused();
  let loaded = false;
  const render = () => {
    viewTabbar();
    loaded = true;
  };

  isFocused ? render() : null;
  return loaded ? (
    <View style={homeStyle.home}>
      <Map />
      <List navigation={navigation} />
    </View>
  ) : (
    <View style={homeStyle.loading}>
      <ActivityIndicator />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  viewTabbar: () => dispatch(viewTab()),
});

export default connect(null, mapDispatchToProps)(Home);
