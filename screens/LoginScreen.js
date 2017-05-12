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
             <TouchableOpacity style={styles.buttonContainer}>
                 <Button
                 title="Next >"
                 onPress={() =>{
                     navigate('Home', {productId:''})
                 }}/>
            </TouchableOpacity>
             <Button
                style={ styles.forgotButton }
                title="Forgot Password?"
                onPress={() => {
                  navigate('Login',)
                  }}/> 
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
        backgroundColor: '#dee5c9',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 20
    },
    forgotButton: {
        fontSize: 12,
        textAlign: 'left',
    }
});