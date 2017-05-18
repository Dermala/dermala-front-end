import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button  } from 'react-native';

 export default class CreateAccountScreen extends Component {
     static navigationOptions = {
         title: 'Welcome'
     };
   render() {
       const { navigate } = this.props.navigation;

        return (
         <View style={styles.mainContainer}>
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Let's get started!
              </Text>
              <Text style={styles.welcome}>
                  Create your account below.
              </Text>
            <Text>Email</Text>
             <TextInput 
              style={styles.input}
             />
             <Text>Password</Text>
             <TextInput 
             secureTextEntry
              style={styles.input}
             />
             <Text>Confirm Password</Text>
             <TextInput 
             secureTextEntry
              style={styles.input}
             />
            <View style={styles.buttonContainer}>
               <TouchableOpacity>
                  
                  <Button 
                  title="Next >"
                  color="black"
                  onPress={() =>{
                     navigate('Profile', {productId: ''})
                 }}></Button>
                </TouchableOpacity>
            </View>
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
        backgroundColor: '#f8f8ff',
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 5
    },
    buttonContainer: {
        backgroundColor: '#dee5c9',
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center'
    }
});