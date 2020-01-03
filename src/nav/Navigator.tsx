import React from 'react';

import Home from '../screens/Home';
import Loading from '../screens/Loading';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeTab = createBottomTabNavigator({
  Home: Home,
});

// const LoginStack = createStackNavigator();

// function LoginStackNav() {
//   return (
//     <LoginStack.Navigator>
//       <LoginStack.Screen name="Login" component={Login} />
//       <LoginStack.Screen name="Signup" component={Signup} />
//     </LoginStack.Navigator>
//   );
// }

const AppSwitch = createSwitchNavigator({
  Loading: Loading,
  //Login: LoginStackNav,
  Home: HomeTab,
});

export default createAppContainer(AppSwitch);
