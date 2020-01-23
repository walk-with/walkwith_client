import React from 'react';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import HomeTab from './HomeTab';
import {connect} from 'react-redux';

import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
}

function AppNav(props: any) {
  console.log('v', props.token);
  return (
    <NavigationNativeContainer>
      {props.pending ? <HomeTab /> : props.token ? <HomeTab /> : <LoginStack />}
    </NavigationNativeContainer>
  );
}

function mapStateToProps(state: any) {
  return {
    pending: state.user.pending,
    error: state.user.error,
    token: state.user.token,
    navOps: state.navOption,
  };
}

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, null)(AppNav);
