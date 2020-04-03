import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import Style from '../../styles/postWalkStyle';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const SelectMap: React.FC<{}> = ({}) => {
  const [coord, setCoord] = useState({
    latitude: 37.5670135,
    longitude: 126.978374,
  });
  const [latitudeDelta, setLatitudeDelta] = useState(0.0052);
  const [longitudeDelta, setLongitudeDelta] = useState(0.0025);
  const [address, setAddress] = useState('');
  const key = '';
  const findAdress = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`,
    )
      .then(res => res.json())
      .then(res => res.results[0].geometry.location)
      .then(res => {
        console.log(res);
        setCoord({latitude: res.lat, longitude: res.lng});
      });
  };
  return (
    <View style={Style.mapAreaWrap}>
      <TextInput
        style={Style.mapInput}
        autoCapitalize="none"
        placeholder="주소검색"
        onChangeText={text => {
          setAddress(text);
        }}
      />
      <Button title="검색" type="outline" onPress={findAdress} />
      <MapView
        style={Style.mapArea}
        provider={PROVIDER_GOOGLE}
        region={{
          ...coord,
          latitudeDelta,
          longitudeDelta,
        }}
        showsUserLocation={true}>
        <Marker coordinate={{...coord}} title="example" description="example" />
      </MapView>
    </View>
  );
};

export default SelectMap;
