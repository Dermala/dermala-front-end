import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={ styles.mainContainer }>            
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }>
                        <Image
                            style={ styles.icon }
                            source={require('../assets/icons/camera-1.png')}
                        />
                        <Button
                            title="Take a Photo"
                            onPress={() => {
                                navigate('PhotoCapture', { productId: 'Sabrina and Pamela are cool, yo' })
                            }}></Button>
                    </View>
                    <View style={ styles.tipsContainer }>
                        <Image
                            style={ styles.icon }
                            source={require('../assets/icons/reminders.png')}
                        />
                        <Button
                            title="Tips and Reminders"
                            onPress={() => {
                                navigate('PhotoCapture', { productId: 'Sabrina and Pamela are cool, yo' })
                            }}></Button>
                    </View>
                </View>
                <View style={ styles.sectionContainer }>
                    <Button
                        title="View Album"
                        onPress={() => {
                            navigate('PhotoAlbum', { productId: 'Sabrina and Pamela are cool, yo' })
                        }}></Button>            
                    <Button
                        title="View Progress"
                        onPress={() => {
                            navigate('PhotoTimelapse', { productId: 'Sabrina and Pamela are cool, yo' })
                        }}></Button>
                </View>
                <View style={ styles.sectionContainer }>
                    <Button
                        title="Go to Products Screen"
                        onPress={() => {
                            navigate('Products', { productId: 'Sabrina and Pamela are cool, yo' })
                        }}></Button>
                </View>
            </View>
        );
    }
}

export default HomeScreen;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f8f2f2',
        alignItems: 'center'
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 2,
    },
    photoContainer: {
        alignItems: 'flex-start',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 2,
    },
    tipsContainer: {
        alignItems: 'flex-end',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 2,
    },
    icon: {

    }
});
