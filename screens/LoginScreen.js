import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button  } from 'react-native';
import { connect } from 'react-redux';
import background from '../assets/logo/Background Fade.png';

import {login, changeField } from '../actions/authActions';

class LoginScreen extends React.Component {
     updateInput = (ev) => {

     }
     
     static navigationOptions = {
         title: 'Login'
     }
   render() {
       const {navigate} = this.props.navigation;
        
        return (
         <View style={ styles.mainContainer}>
            <View style={styles.container}>
              <Text style={styles.title}>
                  Welcome back!
              </Text>
              <Text style={styles.welcome}>
                  Please enter your user information.
              </Text>
             <View>
                <TextInput 
                placeholder="Email"
                style={ styles.input }
                keyboardType='email-address'
                value={ this.props.email }
                onChangeText={(text) => this.props.changeField('email', text)}
                underlineColorAndroid='transparent'/>
             </View>
             <View>
                <TextInput 
                placeholder="password"          
                secureTextEntry
                style={styles.input}
                value={ this.props.password }
                onChangeText={(text) => this.props.changeField('password', text)} 
                underlineColorAndroid='transparent'/>
            </View>
             <TouchableOpacity style={styles.buttonContainer}>
                 <Button
                 title="Next >"
                 color="black"
                 onPress={() =>{
                     navigate('Home', {productId:''})
                 }}/>
            </TouchableOpacity>
             {/*<Button
                style={ styles.forgotButton }
                title="Forgot Password?"
                color="black"
                onPress={() => {
                  navigate('Login',)
                  }}/> */}
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
    inputWrap: {

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

const mapStateToProps = state => ({
    ...state.login
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
    changeField: (key, value) => dispatch(changeField(key, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);