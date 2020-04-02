import React, {ReactElement, useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Map from './Map';
import List from './List';
import homeStyle from '../styles/homeStyle';
import {NavigationAction} from '@react-navigation/native';
import {viewTab} from '../redux/navOption';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';

interface Props {
  navigation: NavigationAction;
  viewTabbar: Function;
}

function Home({navigation, viewTabbar}: Props): ReactElement {
  const [partyList, setPartyList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://54.180.98.231:4000/walks/list');
      setPartyList(result.data);
    };
    fetchData();
  }, []);

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
      {/* <Map list={partyList} changeCurMarker={changeCurMarker} />
      <List list={partyList} curMarker={curMarker} navigation={navigation} /> */}
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
