import React from 'react';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Tab1 from '../screens/Tab1';
import detailView from '../screens/DetailView';
import {connect} from 'react-redux';

import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createIconSetFromFontello} from 'react-native-vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//const isLoggedIn = true;

function LoginStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
}
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="detailView" component={detailView} />
    </Stack.Navigator>
  );
};
const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeStack} />
      <Tab.Screen name="tab1" component={Tab1} />
    </Tab.Navigator>
  );
};

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
    pending: state.pending,
    error: state.error,
    token: state.token,
  };
}

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, null)(AppNav);
