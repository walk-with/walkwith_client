import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';

interface Props {}

export default function Mypage({}: Props): ReactElement {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>마이페이지</Text>
    </View>
  );
}
