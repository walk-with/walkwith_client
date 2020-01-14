import React from 'react';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Tab1 from '../screens/Tab1';
import {connect} from 'react-redux';

import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//const isLoggedIn = true;

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
}

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="tab1" component={Tab1} />
    </Tab.Navigator>
  );
};

function AppNav(props: any) {
  return (
    <NavigationNativeContainer>
      {props.pending ? <HomeTab /> : props.token ? <HomeTab /> : <LoginStack />}
    </NavigationNativeContainer>
  );
}

function mapStateToProps(state: any) {
  return {
    pending: state.pending,
    error: state.error,
    token: state.token,
  };
}

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, null)(AppNav);
