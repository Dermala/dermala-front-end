import React from 'react';
import { View, Text, Button, Image } from 'react-native';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    }
    render() {
      const { navigate } = this.props.navigation;
      return (
            <View>
                <Text>Log into your Account!</Text>
                <Button
                    title="Login"
                    onPress={() => {
                        navigate('Home')
                    }}
                ></Button>
            </View>
        );
    }
}

export default LoginScreen