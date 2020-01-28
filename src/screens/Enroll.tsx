import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import {Button, Input, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {}

export default function Enroll({}: Props): ReactElement {
  return (
    <View>
      {/* 프로필, 이름, 나이, 성별, 키워드? */}

      <Avatar
        source={undefined}
        showEditButton
        rounded
        title="등록"
        size="xlarge"
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
      />
      <Input
        placeholder="이름"
        leftIcon={<Icon name="paw" size={24} color="black" />}
      />
      <Input
        placeholder="나이"
        leftIcon={<Icon name="calendar" size={24} color="black" />}
      />
      <Input
        placeholder="성별"
        leftIcon={<Icon name="venus-mars" size={24} color="black" />}
      />
      <Input
        placeholder="키워드"
        leftIcon={<Icon name="hashtag" size={24} color="black" />}
      />

      <Button title="등록 완료" />
    </View>
  );
}
