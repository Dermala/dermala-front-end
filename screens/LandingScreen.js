import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput } from 'react-native';

class LandingScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <Image
                    style={styles.icon}
                    source={require('../assets/logo/Dermala Icon.png')}
                />
                <Text style={{textAlign: 'center'}}>Landing screen!</Text>
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

var styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f8f2f2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: 150, 
        width: 150
    }
});