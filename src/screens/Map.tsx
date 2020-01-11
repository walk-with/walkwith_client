import React, {ReactElement} from 'react';
import {View} from 'react-native';
import homeStyle from '../styles/homeStyle';
import NaverMapView, {Marker, Coord} from 'react-native-nmap';

interface Props {}

export default function Map({}: Props): ReactElement {
  const coord: Coord = {latitude: 37.5670135, longitude: 126.978374};

  return (
    <View style={homeStyle.mapStyle}>
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        showsMyLocationButton={true}
        center={coord}>
        <Marker coordinate={coord} />
      </NaverMapView>
    </View>
  );
}
