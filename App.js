import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/containers/home';

export default createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      header:null
    }
  }
})
