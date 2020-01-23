import React, {Component} from 'react';
import {View} from 'react-native';
import homeStyle from '../styles/homeStyle';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

interface Props {
  list: Array<{
    name: string;
    avatar_url: string;
    subtitle: string;
    coord: {latitude: number; longitude: number};
  }>;
  changeCurMarker: (id: number) => void;
}
interface State {
  coord: {latitude: number; longitude: number};
  latitudeDelta: number;
  longitudeDelta: number;
}

export default class Map extends Component<Props, State> {
  state = {
    coord: {latitude: 37.5670135, longitude: 126.978374},
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  componentDidMount() {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        this.setState(prev => {
          return {
            ...prev,
            coord: {latitude: coords.latitude, longitude: coords.longitude},
          };
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }

  render() {
    const {coord, latitudeDelta, longitudeDelta} = this.state;
    return (
      <View style={homeStyle.mapStyle}>
        <MapView
          style={homeStyle.mapStyle}
          provider={PROVIDER_GOOGLE}
          region={{
            ...coord,
            latitudeDelta,
            longitudeDelta,
          }}
          showsUserLocation={true}
          onRegionChangeComplete={region => {
            this.setState({
              coord: {
                latitude: region.latitude,
                longitude: region.longitude,
              },
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            });
          }}>
          <Marker
            key={4}
            coordinate={{...coord}}
            title={'움직여'}
            description="this is a marker example"
            onPress={e => {
              // 문자 -> 숫자로 변환해서 state 변경
              this.props.changeCurMarker(Number(e.nativeEvent.id));
            }}
            identifier={`${3}`}
          />
          {this.props.list.map((marker, i) => (
            <Marker
              key={i}
              coordinate={{...marker.coord}}
              title={marker.name}
              description="this is a marker example"
              onPress={e => {
                // 문자 -> 숫자로 변환해서 state 변경
                this.props.changeCurMarker(Number(e.nativeEvent.id));
              }}
              identifier={`${i}`}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
