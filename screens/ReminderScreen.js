import React from 'react';
import { StyleSheet, Dimensions, Text, Button, View, Image} from 'react-native';
import { ImagePicker } from 'expo';
import Svg, { Circle } from 'react-native-svg';

class ReminderScreen extends React.Component {
     
    static navigationOptions = {
        title: 'Helpful Reminders'
    };
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <Image
                style={ styles.mainContainer }
                source={require('../assets/logo/Background Fade.png')}
                >
            <View>
                <Text style={ styles.text }>
                    How to get rid of acne in 5 steps with Dermala:
                </Text>    
            </View>
            <View>
            <Svg height="60" width="60">
                        <Circle
                            cx="30"
                            cy="30"
                            r="30"
                            fill="null"
                            stroke="#80ba34"
                            strokeWidth="2"
                        />
            </Svg>
            </View>
            </Image>
            
        );
    }
}

export default ReminderScreen;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    image: {
        flex: 1, 
        resizeMode: 'cover'
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 20,
    }
});