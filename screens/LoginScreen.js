import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button  } from 'react-native';

 export default class LoginScreen extends Component {
   render() {
        return (
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
             ></Button>
            
             <TouchableOpacity style={styles.buttonContainer}>
                 <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
             </View>
             
            
        );
    }
}

 
const styles  = StyleSheet.create({
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
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 50,
        marginTop: 50
    },
    buttonContainer: {
        backgroundColor: '#dee5c9'
    },
    buttonText: {
        textAlign: 'center'
    }
});