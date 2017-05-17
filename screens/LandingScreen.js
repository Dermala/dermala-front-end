import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput } from 'react-native';

class LandingScreen extends React.Component {
    static navigationOptions = {
        title: 'Back',
        header: null,
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.mainContainer}>
                <View style={ styles.iconContainer }>
                    <Image
                        style={ styles.icon }
                        source={require('../assets/logo/Dermala Icon.png')}
                    />
                </View>
                <View style={ styles.logoContainer}>
                    <Image
                        style={ styles.logo }
                        source={require('../assets/logo/Dermala Logo.png')}
                    />
                    <Text style={ styles.header}>Acne Tracker</Text>
                </View>
                <View style={ styles.contentContainer }>
                    <Button
                        title="Create Account"
                        color='green'
                        onPress={() => {
                            navigate('CreateAccount')
                        }}
                    ></Button>
                    <Button
                        title="Login"
                        color='green'
                        onPress={() => {
                            navigate('Login')
                        }}
                    ></Button>
                </View>
            </View>
        );
    }
}

export default LandingScreen

var styles = StyleSheet.create({
  mainContainer: {
        flex: 1,
        backgroundColor: '#f8f2f2'
    },
    iconContainer: {
        flex: 2,
        alignItems: 'center',
        paddingTop: 100,  
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',   
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        height: 197.75,
        width: 200,
    },
    logo: {
        height: 30,
        width: 150,
    },
    header: {
        fontSize: 25,
        letterSpacing: 1,
        fontWeight: '200',
        textAlign: 'center'
    },
});