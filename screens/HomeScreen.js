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
                        <View style={ styles.icon}>
                            <Image
                                source={require('../assets/icons/camera-1.png')}
                            />
                        </View>
                        <Button
                            title="Take a Photo >"
                            onPress={() => {
                                navigate('PhotoCapture', { productId: 'Sabrina and Pamela are cool, yo' })
                            }}></Button>
                    </View>
                    <View style={ styles.tipsContainer }>
                        <View style={ styles.icon }>
                            <Image
                                source={require('../assets/icons/reminders.png')}
                            />
                        </View>
                        <Button
                            title="Reminders >"
                            onPress={() => {
                                navigate('PhotoCapture', { productId: 'Sabrina and Pamela are cool, yo' })
                            }}></Button>
                    </View>
                </View>
                <View style={ styles.progressContainer }>
                    <View style={ styles.icon }>
                        <Image
                            source={require('../assets/icons/time-lapse.png')}
                        />
                    </View>
                    <Button
                        style={ styles.icon }
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
                <View style={ styles.productsContainer }>
                    <Button
                        title="View All >"
                        onPress={() => {
                            navigate('Products', { productId: 'Sabrina and Pamela are cool, yo' })
                        }}></Button>
                    <View style={ styles.icon}>
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Group 2.png')}
                        />
                    </View>
                    <View style={ styles.icon}>
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Probiotic.png')}
                        />
                    </View>
                    <View style={ styles.icon}>
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Spot Treatment.png')}
                        />
                    </View>
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
        alignItems: 'stretch',

    },
    linearGradient: {
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
    },
    progressContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
    },
    productsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
    },
    photoContainer: {
        flex: 1,
        alignItems: 'stretch',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
    },
    tipsContainer: {
        flex: 1,
        alignItems: 'stretch',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        height: 60, 
        width: 60,
    }
});
