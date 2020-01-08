import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import homeStyle from '../styles/homeStyle';

interface Props {}

export default function Map({}: Props): ReactElement {
  return (
    <View style={homeStyle.mapStyle}>
      <Text>여기는 지도 자리</Text>
    </View>
  );
}
