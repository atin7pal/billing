import React,{Component} from 'react';
import {View,FlatList,TextInput,Text,Button} from 'react-native';
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

  
class MainScreen extends React.Component{

  
    writeUserData(name){
        firebase.database().ref('Users/').push({
            name
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }

    render(){
        return(
           <View>
               <TextInput
               placeholder = "Enter name"
               onChangeText = {(name) => this.setState({name})} />

               <Button title = "save"
               onPress = {() => this.writeUserData(this.state.name)} />

           </View>
        );
    }
}

export default MainScreen;