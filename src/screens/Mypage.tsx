import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import Enroll from './Enroll';

interface Props {}

export default function Mypage({}: Props): ReactElement {
  return (
    <View>
      <Enroll />
    </View>
  );
}
