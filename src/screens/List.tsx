import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';

interface Props {}

export default function List({}: Props): ReactElement {
  return (
    <View>
      <Text>여기는 목록 자리</Text>
    </View>
  );
}
