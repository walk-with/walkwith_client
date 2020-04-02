import React, {ReactElement, useState, useEffect} from 'react';
import {ScrollView, Text, TextInput} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
// import {list} from '../fakeData';
import axios from 'axios';
import {connect} from 'react-redux';
interface Props {
  navigation: any;
  token: any;
}

function mapStateToProps(state: {user: {token: string}}) {
  return {token: state.user.token};
}

interface Pet {
  name?: string;
  age?: number;
  gender?: string;
  image?: string;
  keyword?: string;
  weight?: number;
}

function Mypage({navigation, token}: Props): ReactElement {
  const api = axios.create({baseURL: 'http://54.180.98.231:4000'});
  api.defaults.headers.common.Authorization = token;
  const [userName, setUserName] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [petList, setPetList] = useState<Pet[]>([]);
  const handleUserEdit = async () => {
    if (userName === '' || userPwd === '') {
      return;
    }

    // TODO: 비밀번호 8자리 이상

    await api
      .patch('/users/edit', {
        name: userName,
        password: userPwd,
      })
      .then(res => {
        console.log('변경되ㅁ');
      })
      .catch(e => console.log('uesr edit error', e));
  };

  useEffect(() => {
    //FIXME: 버그 - 이름 변경될때마다 다시 불러짐
    api
      .get('/users')
      .then(res => {
        setUserName(res.data.name);
      })
      .catch(err => console.log(err));

    api.get('/pets').then(({data}) => setPetList(data));
  }, [api]);

  return (
    <ScrollView>
      <TextInput
        onChangeText={setUserName}
        value={userName}
        placeholder="이름"
      />
      <TextInput
        onChangeText={setUserPwd}
        value={userPwd}
        placeholder="비밀번호"
        secureTextEntry
      />
      <Button onPress={handleUserEdit} title="유저 정보 변경" />

      <Button
        type="outline"
        title="펫 등록하기"
        onPress={() => {
          navigation.navigate('enroll', {title: '펫 등록'});
        }}
      />
      {petList.length === 0 && (
        <Text>등록된 펫이 없습니다. 펫 등록하기 버튼을 눌러주세요.</Text>
      )}
      {petList.map((l, i) => {
        return l.image ? (
          <ListItem
            key={i}
            leftAvatar={{source: {uri: l.image}}}
            title={l.name}
            subtitle={`나이 : ${l.age} | 성별 : ${l.gender} | 무게 : ${l.weight}`}
            rightElement={<Text>{l.keyword}</Text>}
            chevron
            bottomDivider
          />
        ) : (
          <ListItem
            key={i}
            title={l.name}
            subtitle={`나이 : ${l.age} | 성별 : ${l.gender} | 무게 : ${l.weight}`}
            rightTitle={l.keyword}
            chevron
            bottomDivider
            onPress={() => {
              navigation.navigate('petEdit', {title: '펫 수정'});
            }}
          />
        );
      })}
    </ScrollView>
  );
}

export default connect(mapStateToProps)(Mypage);
