import React, {Component} from 'react';
import {View} from 'react-native';
import homeStyle from '../styles/homeStyle';
import NaverMapView, {Marker, Coord} from 'react-native-nmap';
import Geolocation from 'react-native-geolocation-service';

interface Props {}
interface State {
  coord: Coord;
}

export default class Map extends Component<Props, State> {
  state = {coord: {latitude: 37.5670135, longitude: 126.978374}};

  componentDidMount() {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        this.setState({
          coord: {latitude: coords.latitude, longitude: coords.longitude},
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }

  render() {
    const {coord} = this.state;
    return (
      <View style={homeStyle.mapStyle}>
        <NaverMapView
          style={homeStyle.mapViewStyle}
          showsMyLocationButton={true}
          center={coord}>
          <Marker coordinate={coord} />
        </NaverMapView>
      </View>
    );
  }
}
