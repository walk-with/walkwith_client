import React from 'react';
import {View, Text, Button} from 'react-native';

const Login = props => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="sign up"
        onPress={() => props.navigation.navigate('signup')}
      />
    </View>
  );
};

export default Login;
