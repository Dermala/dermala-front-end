import React from 'react';
import { StyleSheet, ScrollView, Text, Button, View, Image } from 'react-native';
import { ImagePicker } from 'expo';
import Svg, { Circle } from 'react-native-svg';
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <Image
                style={ styles.mainContainer }
                source={require('../assets/logo/Background Fade.png')}
                resizeMode="cover">
            <View style={ styles.mainContainer }>           
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }>
                        <View style={ styles.icon }>
                        <Image source={require('../assets/icons/camera-1.png')} />
                        </View>
                        <Button
                            title="Take a Photo >"
                            onPress={this._pickImage}
                        />    
                    </View>
                    <View style={ styles.tipsContainer }>
                        <View style={ styles.icon }>
                            <Image
                                source={require('../assets/icons/reminders.png')}
                            />
                        </View>
                        <Button
                            style={ styles.button }
                            title="Reminders >"
                            onPress={() => {
                                navigate('Reminders')
                            }}></Button>
                    </View>
                </View>
                
                <View style={ styles.progressContainer }>
                    <Swiper 
                        height={200} 
                        horizontal={true}
                        dot={<View style={{backgroundColor: '#DEE5C8', width: 6, height: 6, borderRadius: 4}} />}
                        activeDot={<View style={{backgroundColor: '#80ba34', width: 8, height: 8, borderRadius: 4, margin: 3}} />}>
                    <View style={ styles.icon }>
                        <Image
                            source={require('../assets/icons/time-lapse.png')}
                        />
                        <Button
                        title="View Album"
                        color= 'black'
                        style={ styles.icon }
                        onPress={() => {
                            navigate('PhotoAlbum', { productId: 'Sabrina and Pamela are cool, yo' })
                        }}/>
                    </View>
                    <View style={ styles.icon }>
                        <Image
                            source={require('../assets/icons/time-lapse.png')}
                        />           
                    <Button
                        title="View Progress"
                        onPress={() => {
                            navigate('PhotoTimelapse', { productId: 'Sabrina and Pamela are cool, yo' })
                        }}></Button>
                    </View>
                    </Swiper>
                </View>
                <View style={ styles.productsContainer }>    
                    <Carousel
                        ref={(carousel) => { this._carousel = carousel; }}
                        sliderWidth={50}
                        itemWidth={30}
                        >
                    <Svg height="150" width="150">
                        <Circle
                            cx="65"
                            cy="65"
                            r="65"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Group 2.png')}
                        />
                    </Svg>
                    <Svg height="150" width="150">
                        <Circle
                            cx="65"
                            cy="65"
                            r="65"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Probiotic.png')}
                        />
                    </Svg>
                    <Svg height="150" width="150">
                        <Circle
                            cx="65"
                            cy="65"
                            r="65"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Spot Treatment.png')}
                        />
                    </Svg>
                    </Carousel>
                    <View style={ styles.viewButton }>
                    <Button
                        style={ styles.viewButton }
                        title="View All >"
                        onPress={() => {
                            navigate('Products')
                        }}/>
                    </View>
                </View>
            </View>
            </Image>
        );
    
    }

     _pickImage = async() =>{
        let result = await ImagePicker.launchCameraAsync({
           allowsEditing: true,
           aspect: [4,3], 
        });

        }
}

export default HomeScreen;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
        backgroundColor:'transparent'
    },
    productsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'transparent'

    },
    photoContainer: {
        flex: 1,
        alignItems: 'stretch',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'transparent'
    },
    tipsContainer: {
        flex: 1,
        alignItems: 'stretch',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'transparent'
    },
    icon: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        height: null, 
        width: null,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: 'transparent'
    },
    viewButton: {
        position: 'absolute',
        right: 20,
        backgroundColor: 'transparent',
    }
});
