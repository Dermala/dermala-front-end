import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Dimensions, ScrollView, Button, Text, View, Image } from 'react-native';
import { ImagePicker } from 'expo';
import secrets from '../secrets';
import { RNS3 } from 'react-native-aws3';
import uuid from 'uuid/v1';
import { addPost } from '../actions/postActions';
import Svg, { Circle } from 'react-native-svg';
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';

class HomeScreen extends React.Component {
    static navigationOptions = {       
        title: 'Home',
        headerRight: <Button 
                        title="Sign Out"
                        color='black' />,
    };

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <Image
                style={ styles.mainContainer }
                source={require('../assets/logo/Background Fade.png')}
                resizeMode="stretch">
            <View style={ styles.mainContainer }>           
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }>
                        <View style={ styles.icon }>
                        <Image source={require('../assets/icons/camera-1.png')} />
                        </View>
                        <Button
                            title="Take a Photo >"
                            color='black'
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
                            color='black'
                            title="Tips >"
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
                        color='black'
                        onPress={() => {
                            navigate('PhotoTimelapse', { productId: 'Sabrina and Pamela are cool, yo' })
                        }}></Button>
                    </View>
                    </Swiper>
                </View>
                <View style={ styles.productsContainer }>    
                    <Carousel
                        sliderWidth={50}
                        itemWidth={30}
                        inactiveSlideScale={0.9}
                        inactiveSlideOpacity={1}
                        enableMomentum={false}
                        showsHorizontalScrollIndicator={false}
                        snapOnAndroid={true}
                        removeClippedSubviews={false}
                        >
                    <View style={ styles.slideInnerContainer }>
                    <Svg height="120" width="120">
                        <Circle
                            cx="60"
                            cy="60"
                            r="60"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Group 2.png')}
                        />
                    </Svg>
                    </View>
                    <View style={ styles.slideInnerContainer }>
                    <Svg height="120" width="120">
                        <Circle
                            cx="60"
                            cy="60"
                            r="60"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Probiotic.png')}
                        />
                    </Svg>
                    </View>
                    <View style={ styles.slideInnerContainer }>
                    <Svg height="120" width="120">
                        <Circle
                            cx="60"
                            cy="60"
                            r="60"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Spot Treatment.png')}
                        />
                    </Svg>
                    </View>
                    <View style={ styles.slideInnerContainer }>
                    <Svg height="120" width="120">
                        <Circle
                            cx="60"
                            cy="60"
                            r="60"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Zinc.png')}
                        />
                    </Svg>
                    </View>
                    <View style={ styles.slideInnerContainer }>
                    <Svg height="120" width="120">
                        <Circle
                            cx="60"
                            cy="60"
                            r="60"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Jar with Pads.png')}
                        />
                    </Svg>
                    </View>
                    <View style={ styles.slideInnerContainer }>
                    <Svg height="120" width="120">
                        <Circle
                            cx="60"
                            cy="60"
                            r="60"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Text>1</Text>
                        <Image
                            style={ styles.image }
                            source={require('../assets/images/Packet.png')}
                        />
                    </Svg>
                    </View>
                    </Carousel>
                    <View style={ styles.viewButton }>
                    <Button
                        style={ styles.viewButton }
                        color='black'
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
        ImagePicker.launchCameraAsync({
           allowsEditing: true,
           aspect: [4, 3], 
        })
        .then(result => {
            console.log('Picture Taken');
            
            const file = {
                uri: result.uri,
                name: `${uuid()}.jpg`,
                type: "image/jpeg"
            };
            const options = {
                keyPrefix: "uploads/",
                bucket: secrets.awsBucketName,
                region: "us-west-2",
                accessKey: secrets.awsAccessKey,
                secretKey: secrets.awsSecretKey,
                successActionStatus: 201
            };

            RNS3
                .put(file, options)
                .then(response => {
                    if (response.status !== 201){
                        console.log(response);
                    }
                    console.log(response);
                    this.props.navigation.navigate('PhotoNotes', { url: `https://d3olwvuk0x912i.cloudfront.net/${response.body.postResponse.key}` })
                });
        });

        }
}

export default HomeScreen;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
    slideInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center'
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
    text: {
      color: 'black'  
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
