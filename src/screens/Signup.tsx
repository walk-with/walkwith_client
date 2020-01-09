import React, {useState} from 'react';
import {View, TextInput, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {signup} from '../style';
import validator from 'validator';
//입력값 없는 필드 서브밋 클릭시 체크할 것

const Signup = props => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState({all: '', email: '', password: ''});

  const validate = (data: string) => {
    console.log('email', email);
    let txt;
    switch (data) {
      case 'email':
        if (!validator.isEmail(email)) {
          txt = '이메일주소를 정확히 입력해주세요';
        } else if (email === '' || validator.isEmail(email)) {
          txt = '';
        }
        setWarning({...warning, email: txt});
        break;
      case 'password':
        if (!validator.isLength(password, {min: 8, max: 14})) {
          txt = '비밀번호는 8자 이상 14자 이하입니다.';
        } else {
          txt = '';
        }
        setWarning({
          ...warning,
          password: txt,
        });
    }
  };

  const setInput = async (text, fn) => {
    console.log('text', text);
    await fn(text);
    console.log(email, userName, password);
  };

  const submit = async () => {
    const user = {
      email,
      userName,
      password,
    };
    let alert;
    const res = await fetch('server/users/signup', {
      method: 'post',
      body: user,
    });
    if (res.status === 201) {
      props.navgation.push('login');
    } else {
      if (res.status === 400) {
        alert = '모든 정보를 입력해주세요.';
      }
      if (res.status === 409) {
        alert = '이미 사용 중인 이메일입니다.';
      }
    }
    alert ? Alert.alert(alert) : null;
  };

  return (
    <View style={signup.container}>
      <View style={signup.inputBox}>
        <TextInput
          autoCapitalize="none"
          style={signup.input}
          placeholder="EMAIL"
          keyboardType="email-address"
          autoCompleteType="email"
          autoFocus={true}
          onChangeText={text => {
            setInput(text, setEmail);
            validate('email');
          }}
          onEndEditing={validate}
        />
        {warning.email ? (
          <Text
            style={{color: 'red', textAlign: 'justify', paddingHorizontal: 10}}>
            {warning.email}
          </Text>
        ) : null}
        <TextInput
          autoCapitalize="none"
          style={signup.input}
          placeholder="USER NAME"
          onChange={e => setInput(e.nativeEvent.text, setUserName)}
        />
        <TextInput
          autoCapitalize="none"
          style={signup.input}
          placeholder="PASSWORD"
          secureTextEntry={true}
          onChangeText={text => {
            setInput(text, setPassword);
            validate('password');
          }}
        />
        {warning.password ? (
          <Text
            style={{color: 'red', textAlign: 'justify', paddingHorizontal: 10}}>
            {warning.password}
          </Text>
        ) : null}
      </View>
      <Button
        buttonStyle={{borderRadius: 50}}
        containerStyle={{width: '50%'}}
        type="outline"
        style={signup.submit}
        title="회원가입"
        onPress={submit}
      />
    </View>
  );
};

export default Signup;
