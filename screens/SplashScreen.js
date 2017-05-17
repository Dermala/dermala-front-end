import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

class SplashScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    componentWillMount () {
        setTimeout(() => {
            this.props.navigation.navigate('Landing')
        }, 500);
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
            </View>
        );
    }
}

export default SplashScreen;

var styles = StyleSheet.create({
  mainContainer: {
        flex: 1,
        backgroundColor: '#f8f2f2'
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,  
    },
    logoContainer: {
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