import React from 'react';
import { View, Text, Button, Image } from 'react-native';

class LandingScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    }
    render() {
        return (
            <View>
                <Text>Landing screen!</Text>
                <Button
                    title="Login"
                    onPress={() => {
                        navigate('Login')
                    }}
                ></Button>
                <Button
                    title="Create Account"
                    onPress={() => {
                        navigate('CreateAccount')
                    }}
                ></Button>
            </View>
        );
    }
}

export default LandingScreen