import React, {useState} from 'react';
import {View, TextInput, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import Style from '../styles/signUp';
import validator from 'validator';
//입력값 없는 필드 서브밋 클릭시 체크할 것
interface Props {
  navigation: any;
}
const Signup = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState({all: '', email: '', password: ''});
  let isReadyToSubmit = undefined;

  const validate = async () => {
    console.log('email', email, 'pw', password);
    let [warnEmail, warnPW] = ['', ''];
    if (!validator.isEmail(email)) {
      warnEmail = '이메일주소를 정확히 입력해주세요';
    } else if (email === '' || validator.isEmail(email)) {
      warnEmail = '';
    }
    if (!validator.isLength(password, {min: 8, max: 14})) {
      warnPW = '비밀번호는 8자 이상 14자 이하입니다.';
    } else {
      warnPW = '';
    }
    isReadyToSubmit =
      warnEmail.length === 0 && warnPW.length === 0 ? true : false;
    await setWarning({...warning, email: warnEmail, password: warnPW});
  };

  const submit = async () => {
    validate();
    let alert;

    if (!isReadyToSubmit) {
      alert = '입력한 정보를 확인해주세요.';
    } else {
      const user = {
        email,
        userName,
        password,
      };
      let emptyInput = false;
      for (let key in user) {
        if (validator.isEmpty(user[key])) {
          console.log(key);
          emptyInput = true;
        }
      }

      if (emptyInput) {
        alert = '모든 정보를 입력해주세요.';
      } else {
        const res = await fetch('http://46f912f2.ngrok.io/users/signup', {
          method: 'post',
          body: user,
        });
        if (res.status === 201) {
          navigation.push('login');
        } else if (res.status === 409) {
          alert = '이미 사용 중인 이메일입니다.';
        } else {
          alert = '잠시 후에 다시 시도해주세요.';
        }
      }
    }
    alert ? Alert.alert(alert) : null;
  };

  return (
    <View style={Style.container}>
      <View style={Style.inputBox}>
        <TextInput
          autoCapitalize="none"
          style={Style.input}
          placeholder="EMAIL"
          keyboardType="email-address"
          autoCompleteType="email"
          autoFocus={true}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        {warning.email ? (
          <Text
            style={{color: 'red', textAlign: 'justify', paddingHorizontal: 10}}>
            {warning.email}
          </Text>
        ) : null}
        <TextInput
          autoCapitalize="none"
          style={Style.input}
          placeholder="USER NAME"
          onChangeText={text => {
            setUserName(text);
          }}
        />
        <TextInput
          autoCapitalize="none"
          style={Style.input}
          placeholder="PASSWORD"
          secureTextEntry={true}
          onChangeText={text => {
            setPassword(text);
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
        style={Style.submit}
        title="회원가입"
        onPress={submit}
      />
    </View>
  );
};

export default Signup;
