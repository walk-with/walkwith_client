import * as React from 'react';
import {connect} from 'react-redux';
import {View, TextInput, Button} from 'react-native';
import requestLogin from '../redux/user';

function Login(props: any) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={() => props.requestLogin(username, password)}
      />
    </View>
  );
}

// const mapDispatchToProps = {requestLogin};
function mapDispatchToProps(dispatch: any) {
  return {
    requestLogin: (email: string, pw: string) => {
      dispatch(requestLogin(email, pw));
    },
  };
}

// eslint-disable-next-line prettier/prettier
export default connect(null, mapDispatchToProps)(Login);
