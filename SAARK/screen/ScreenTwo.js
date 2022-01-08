import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDQbH2FWt61NnDcrByv3okyHawRtVNp0YY",
    authDomain: "saark-9bd08.firebaseapp.com",
    databaseURL: "https://saark-9bd08.firebaseio.com",
    projectId: "saark-9bd08",
    storageBucket: "saark-9bd08.appspot.com",
    messagingSenderId: "290624193136",
    appId: "1:290624193136:web:9661112fbddcf68ea06ab5",
  };
  if(!firebase.apps.length){
    const app = firebase.initializeApp(config);
    
  }

  
  



export default class ScreenTwo extends Component {
    render(){
        return(
            <View>
                
            </View>
        );
    }
}
