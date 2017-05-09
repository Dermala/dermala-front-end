import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button  } from 'react-native';

 export default class LoginScreen extends React.Component {
     static navigationOptions = {
         title: 'Login'
     }
   render() {
       const {navigate} = this.props.navigation;
        
        return (
         <View style={ styles.mainContainer}>
            <View style={styles.container}>
              <Text style={styles.title}>
                  Welcome back, Betty.
              </Text>
              <Text style={styles.welcome}>
                  What is your password?
              </Text>
             <TextInput 
             style={styles.input}
             placeholder="email"
             />
             <TextInput 
             style={styles.input}
             placeholder="password"
             secureTextEntry
             />
             <Button
                title="Forgot Password?"
                onPress={() => {
                  navigate('Login',)
                  }}
             ></Button>
            
             <TouchableOpacity style={styles.buttonContainer}>
                 <Button
                 title="Next >"
                 onPress={() =>{
                     navigate('Home', {productId:''})
                 }}></Button>
            </TouchableOpacity>
         </View>
        </View>
            
        );
    }
}



var styles  = StyleSheet.create({
     mainContainer: {
        flex: 1,
        backgroundColor: '#f8f2f2'
    },
    container: {
        padding:20
    },
   title: {
        fontSize: 21,
        textAlign: 'center',
        margin: 10,
    },
    welcome: {
        fontSize: 21,
        textAlign: 'center'
    },
    input:{
        height: 40,
        backgroundColor: '#f8f8ff',
        marginBottom: 20,
        marginTop: 20
    },
    buttonContainer: {
        backgroundColor: '#dee5c9'
    },
    buttonText: {
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 20
    }
});