import React, {Component} from 'react';
import {View} from 'react-native';
import homeStyle from '../styles/homeStyle';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

interface Props {
  list: Array<{
    title: string;
    Longitude: string;
    Latitude: string;
    time: string;
    tag: string[];
    image: string;
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
          // TODO: 지도 위치 바뀌면 다시 서버 요청하기
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
          {this.props.list.map((marker, i) => {
            console.log(marker);
            return (
              <Marker
                key={i}
                // TODO: 위도 , 경도 순서 바뀜
                coordinate={{
                  longitude: Number(marker.Latitude),
                  latitude: Number(marker.Longitude),
                }}
                title={marker.title}
                description={marker.time}
                onPress={e => {
                  this.props.changeCurMarker(Number(e.nativeEvent.id));
                }}
                identifier={`${i}`}
              />
            );
          })}
        </MapView>
      </View>
    );
  }
}
