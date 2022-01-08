import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';



class LedgerScreen extends React.Component{
    render(){
        return(
       <View>
         <Text>Hello</Text>
       </View>
         
        );
    }
}


const styles = StyleSheet.create({
    container : 
    {
       flex : 1,
       justifyContent : 'center',
       alignItems : 'center'
    }
})


export default LedgerScreen;