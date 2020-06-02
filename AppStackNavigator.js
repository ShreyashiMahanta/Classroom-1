import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ClassScreen from '../screens/ClassScreen';
import HomeScreen  from '../screens/HomeScreen';




export const AppStackNavigator = createStackNavigator({
  ClassScreen : {
    screen : ClassScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  
);
