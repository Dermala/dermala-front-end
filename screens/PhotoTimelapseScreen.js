import React from 'react';
import { connect } from 'react-redux';
import { Text, Button, View, StyleSheet, ScrollView, TouchableHighlight, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Rating from 'react-native-easy-rating';
import { ImagePicker } from 'expo';
import secrets from '../secrets';
import { RNS3 } from 'react-native-aws3';
import uuid from 'uuid/v1';

import { getAllPhotos } from '../actions/postActions.js'

class PhotoTimelapseScreen extends React.Component {
    static navigationOptions = {
        title: 'Progress'
    };

    componentDidMount(){
        this.props.fetchPhotos();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{backgroundColor: '#f8f2f2'}}>
            <ScrollView>
                <View style={ styles.mainContainer }>
                    <View style={ styles.photoContainer }>
                        { this.props.photos.map(function(photo) {
                        return (
                            <View key={photo._id} style={ styles.photoContainer }>            
                                <Image source={{ url: photo.imageUrl }} style={{height: 300, width: 300, borderRadius: 8, borderColor: 'black', borderWidth: 2, paddingLeft: 10, margin: 10 }}/>
                                <View style={{ position: 'absolute'}}>
                                    <Rating
                                        rating={ photo.rating }
                                        iconWidth={30}
                                        iconHeight={30}
                                        iconSelected={require('../assets/icons/blackStar.png')}
                                        iconUnselected={require('../assets/icons/emptyStar.png')}
                                        style={{ paddingBottom: 10, paddingTop: 10, marginLeft: 80, marginTop: 10}}
                                        />
                                </View>
                                <Text style={{ fontSize: 20, textAlign: 'center', paddingBottom: 10, backgroundColor: 'transparent' }}>{photo.notes}</Text>
                            </View>   
                            )
                        }) } 
                    </View>
                </View>                           
            </ScrollView>
            </View>     
          );
    }
    
    _pickImage = async() =>{
        ImagePicker.launchCameraAsync({
           allowsEditing: true,
           aspect: [4, 3], 
        })
        .then(result => {
            console.log(result);
            if(!result.cancelled){
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
                })  
            }
        });

    }
}

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f8f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    photoContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    image: {
        width: 500,
        height: 500,
    },
    notesContainer: {
        flex: 1,
        position: 'absolute',
        paddingBottom: 20 ,
        marginBottom: 20,
        backgroundColor: '#dee5c9'
    },
    button: {
        flex: 1
    },
    text: {
        flex: 1,
        fontSize: 30,
    }
   
});

const mapStateToProps = state => ({
    ...state.album
});

const mapDispatchToProps = dispatch => ({
    fetchPhotos: () => dispatch(getAllPhotos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(PhotoTimelapseScreen);

var styles =StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: '#f8f2f2'
    }
});