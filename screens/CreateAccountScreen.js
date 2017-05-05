import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text  } from 'react-native';

 export default class LoginScreen extends Component {
   render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Lets start by signing you in.
              </Text>
              <Text style={styles.instructions}>
                What is your email?
              </Text>
            
             <TextInput 
             placeholder="email"
              style={styles.input}
             />
             <TextInput 
             placeholder="password"
             secureTextEntry
              style={styles.input}
             />
             <TextInput 
             placeholder=" confirm password"
             secureTextEntry
              style={styles.input}
             />
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
    welcome: {
        fontSize: 21,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        fontSize: 21,
        textAlign: 'center'
    },
    logo: {
        width:100,
        height: 100
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#dee5c9'
    },
    buttonText: {
        textAlign: 'center'
    }
});