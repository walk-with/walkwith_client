import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';

interface Props {}

export default function Map({}: Props): ReactElement {
  return (
    <View>
      <Text>여기는 지도 자리</Text>
    </View>
  );
}
