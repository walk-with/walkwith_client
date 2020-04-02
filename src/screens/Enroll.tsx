import React, {ReactElement, useState} from 'react';
import {ScrollView} from 'react-native';
import {Button, Input, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import axios from 'axios';

interface Props {
  navigation: any;
  token: any;
}

function mapStateToProps(state: {user: {token: string}}) {
  return {token: state.user.token};
}

function Enroll({navigation, token}: Props): ReactElement {
  const api = axios.create({baseURL: 'http://54.180.98.231:4000'});
  api.defaults.headers.common.Authorization = token;
  const [avatarImg, setAvatarImg] = useState('');
  const [petName, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setAvatarImg(response.uri);
        console.log(response.uri);
      }
    });
  };

  const handleAddPet = async () => {
    // TODO: 빈 내용이면 예외처리

    // TODO: 태그 넣기

    await api
      .post('/pets/create', {
        name: petName,
        age: age,
        gender: gender,
        image: avatarImg,
        keyword: '',
      })
      .then(() => {
        navigation.navigate('mypage');
      })
      .catch(e => console.log('pet add error', e));
  };

  return (
    <ScrollView>
      {avatarImg === '' ? (
        <Avatar
          showEditButton
          rounded
          title="등록"
          size="xlarge"
          onPress={handleChoosePhoto}
          activeOpacity={0.7}
        />
      ) : (
        <Avatar
          source={{uri: avatarImg}}
          showEditButton
          rounded
          title="등록"
          size="xlarge"
          onPress={handleChoosePhoto}
          activeOpacity={0.7}
        />
      )}

      <Input
        placeholder="이름"
        leftIcon={<Icon name="paw" size={24} color="black" />}
        value={petName}
        onChangeText={setName}
      />
      <Input
        placeholder="나이"
        leftIcon={<Icon name="calendar" size={24} color="black" />}
        value={age}
        onChangeText={setAge}
      />
      <Input
        placeholder="성별"
        leftIcon={<Icon name="venus-mars" size={24} color="black" />}
        value={gender}
        onChangeText={setGender}
      />
      <Input
        placeholder="무게"
        leftIcon={<Icon name="weight" size={24} color="black" />}
        value={weight}
        onChangeText={setWeight}
      />
      <Input
        placeholder="키워드"
        leftIcon={<Icon name="hashtag" size={24} color="black" />}
        //TODO: 키워드 인풋 바꾸기 태그로
      />
      <Button title="등록 완료" type="clear" onPress={handleAddPet} />
    </ScrollView>
  );
}

export default connect(mapStateToProps)(Enroll);
