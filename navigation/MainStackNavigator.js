/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import TruckerScreen from '../screens/TruckerScreen';


export default StackNavigator(
  {
      Home: {
        path: '/',
        screen: HomeScreen,
      },
      Trucker: {
        path: '/trucker',
        screen: TruckerScreen,
      },
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: Colors.tabIconSelected,
    },
  }
);
