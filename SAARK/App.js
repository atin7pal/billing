/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginScreen from './screen/LoginScreen';
import ScreenOne from './screen/ScreenOne';
import VoucherScreen from './screen/VoucherScreen';
import  MainScreen from './screen/MainScreen';
import ScreenTwo from './screen/ScreenTwo';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';




const appswitchnavigator = createStackNavigator({

  Login : {screen : LoginScreen, navigationOptions: ({ navigation }) => {
    return {
      header: null,
    }
  },},
  Main : {screen : MainScreen,navigationOptions: ({ navigation }) => {
    return {
      header: null,
    }
  },},

  Two : {screen : ScreenTwo,navigationOptions: ({ navigation }) => {
    return {
      header: null,
    }
  },},

  Ledger : {screen : ScreenOne,navigationOptions: ({ navigation }) => {
    return {
      header: null,
    }
  },},
  Voucher : {screen : VoucherScreen,navigationOptions: ({ navigation }) => {
    return {
      header: null,
    }
  },}
 
})

const Appcontainer = createAppContainer(appswitchnavigator);

class App extends React.Component{
  render(){
    return(
      <Appcontainer/>
    );
  }
}

const styles = StyleSheet.create({
container : 
{
  flex : 1,
  justifyContent : 'center',
  alignItems : 'center',
}
});

export default App;
