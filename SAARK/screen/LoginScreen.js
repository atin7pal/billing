import React,{Component} from 'react';
import {View,Text,StyleSheet, Picker,TextInput,Image} from 'react-native';
import {Card,Button} from 'react-native-elements';
import VoucherScreen from './VoucherScreen';



 



class LoginScreen extends React.Component{


    state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
    render(){
        return(
            <View style = {styles.container}> 

            <Text style = {{fontSize : 40,color : 'black',marginTop : '10%',alignSelf : 'center'}}>Login</Text>

            <View style = {{height : 50,width : 250,alignSelf : 'center',marginTop : '15%'}}>
                <View style = {{width : 255,height : 50,borderWidth : 0.5,borderRadius : 5,flexDirection: 'row'}}>
                <Text style = {{marginLeft : 5,fontSize : 17,marginTop : 12}}>User ID</Text>

                <View style = {{width : 0.8,backgroundColor : 'black',height : 50,marginLeft : 6}}></View>

                <Picker style = {{width : 180,height : 40,alignSelf : 'center',marginLeft : 3}} selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "001" value = "001" />
               <Picker.Item label = "002" value = "002" />
               <Picker.Item label = "003" value = "003" />
            </Picker>

                </View>
                 
            </View>
            

            <TextInput style = {{width : 255,height : 50,borderWidth : 0.5,borderRadius : 5,alignSelf : 'center',marginTop : 10}}
            placeholder = "Enter Password"/>

              
              
             <View style = {{height : 50,width : 250,alignSelf : 'center',marginTop : 10}}>
                <View style = {{width : 255,height : 50,borderWidth : 0.5,borderRadius : 5,flexDirection: 'row'}}>
                <Text style = {{marginLeft : 5,fontSize : 17,marginTop : 12}}>Company</Text>

                <View style = {{width : 0.8,backgroundColor : 'black',height : 50,marginLeft : 6}}></View>

                <Picker style = {{width : 170,height : 40,alignSelf : 'center',marginLeft : 3}} selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Company1" value = "001" />
               <Picker.Item label = "Company2" value = "002" />
               <Picker.Item label = "Company3" value = "003" />

               </Picker>

                </View>
                 
            </View>



               
             <View style = {{height : 50,width : 250,alignSelf : 'center',marginTop : 10}}>
                <View style = {{width : 255,height : 50,borderWidth : 0.5,borderRadius : 5,flexDirection: 'row'}}>
                <Text style = {{marginLeft : 5,fontSize : 17,marginTop : 12}}>Year</Text>

                <View style = {{width : 0.8,backgroundColor : 'black',height : 50,marginLeft : 6}}></View>

                <Picker style = {{width : 210,height : 40,alignSelf : 'center',marginLeft : 3}} selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Year1" value = "001" />
               <Picker.Item label = "Year2" value = "002" />
               <Picker.Item label = "Year3" value = "003" />
            </Picker>

                </View>
                 
            </View>

                <Button buttonStyle = {{...styles.button,marginTop : 50}} title = "Login"
                onPress = {() => this.props.navigation.navigate('Voucher')} />
                <Button buttonStyle = {{...styles.button,marginTop : 10}} title = "Exit"/>
              
                <View style = {{position : 'absolute',bottom : 0,marginBottom : 10}}>
                  <Image
                  style = {{height : 40,width : 40,marginLeft : 10}}
                  source = {{uri : 'https://firebasestorage.googleapis.com/v0/b/newproj-7a868.appspot.com/o/surface-pro-6_1.jpeg?alt=media&token=2704badd-660e-46b8-9425-1dbfac66bdf6'}} />
             </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : 
    {
       flex : 1,
       backgroundColor : '#BBDEFB'
    },
    button : 
    {
        width : 200,
        height : 55,
        borderRadius : 10,
        alignSelf : 'center'
    }
})

export default LoginScreen;