import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Dropdown } from 'react-native-material-dropdown';
import React from 'react';
import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import { TabBar } from 'react-native-animated-nav-tab-bar';
import firebase from 'firebase';
import ScreenOne from './ScreenOne';
import MainScreen from './MainScreen';
import ScreenTwo from './ScreenTwo';

const firebaseConfig = {

    apiKey: "AIzaSyA9n5I1cuLGTcGCIr36tyBYcbpVQRdE2GU",
    authDomain: "fir-project-e5c7c.firebaseapp.com",
    databaseURL: "https://fir-project-e5c7c.firebaseio.com",
    projectId: "fir-project-e5c7c",
    storageBucket: "fir-project-e5c7c.appspot.com",
    messagingSenderId: "637754385807",
    appId: "1:637754385807:web:7f3cedccef3abcac5e17fa",
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}



const Screen = styled.View`
    flex : 1;
    background-color : #BBDEFB;
`

const TabBarIcon = (props) => 
{
    return(
        <Icon
            name={props.name}
            size={props.size ? props.size : 24}
            color={props.focused ? props.tintColor : "#222222"}

        />
    )
}


const HomeStack = createSwitchNavigator({
    Home : ScreenOne
})

const DiscoverStack = createSwitchNavigator({
    Discover: MainScreen
})


const ProfileStack = createSwitchNavigator({
    Profile: ScreenTwo
})

HomeStack.navigationOptions = 
{
    tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="home" />,
}

DiscoverStack.navigationOptions = 
{
    tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="search" />,
}


ProfileStack.navigationOptions = 
{
    tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="user" />,
}

const styles = StyleSheet.create({
container : 
{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
    
    
},
Inputtext : 
{
alignSelf : 'center',
marginTop : 10,
borderWidth : 0.8,
borderRadius : 20,
borderColor : 'black',
height : 50,
width : '80%'
}
});

export default createAppContainer(
    createBottomTabNavigator(

        {
            Home : HomeStack,
            Discover : DiscoverStack,
            Profie : ProfileStack,

        }, {
        tabBarOptions : {
            useNativeDriver : true,
            activeTintColor : "#2F7C6E",
            inactiveTintColor : "#222222",
        },

        tabBarComponent: props => <TabBar
            activeColors = {'black'}
            activeTabBackgrounds = {'#BBDEFB'}
            {...props}
        />,
    }
    )
)