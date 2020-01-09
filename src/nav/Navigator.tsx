import React from 'react';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Tab1 from '../screens/Tab1';

import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const isLoggedIn = true;

function LoginStack() {
  return (
    <Stack.Navigator headerMode="none">
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

function AppNav() {
  return (
    <NavigationNativeContainer>
      {isLoggedIn ? <LoginStack /> : <HomeTab />}
    </NavigationNativeContainer>
  );
}

export default AppNav;
