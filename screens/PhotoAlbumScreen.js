import React from 'react';
import { connect } from 'react-redux';
import { Text, Button, View, StyleSheet, ScrollView, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Rating from 'react-native-easy-rating';
import { ImagePicker } from 'expo';
import secrets from '../secrets';
import { RNS3 } from 'react-native-aws3';
import uuid from 'uuid/v1';

import { getAllPhotos } from '../actions/postActions.js'

class PhotoAlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'My Album'
    };

    componentDidMount(){
        this.props.fetchPhotos();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{backgroundColor: '#f8f2f2'}}>
            <ScrollView>
                <TouchableHighlight 
                    onPress={this._pickImage}
                    underlayColor= "#f8f2f2">
                    <View style={styles.photoContainer}>
                        <Image
                            style={styles.button}
                            source={require('../assets/icons/add.png')}
                        />
                        <Text style={styles.text}>Add Photo</Text>
                    </View>
                </TouchableHighlight>
                <View style={ styles.mainContainer }>
                { this.props.photos.map(function(photo) {
                    return (
                        <View key={photo._id}>
                            <View style={ styles.photoContainer }>
                            <Image source={{ url: photo.imageUrl }} style= {{ height: 100, width: 100, borderRadius: 5, padding: 5 }}/>
                            </View>
                            <View style={ styles.notesContainer }>
                                <Rating
                                    rating={ photo.rating }
                                    iconWidth={20}
                                    iconHeight={20}
                                    iconSelected={require('../assets/icons/blackStar.png')}
                                    iconUnselected={require('../assets/icons/emptyStar.png')}
                                    />
                                <Text>{photo.notes}</Text>
                            </View>
                        </View>   
                    )
                }) } 
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
        padding: 10,
    },
      notesContainer: {
        flex: 1,
        padding: 10,
    },
    button: {
        flex: 1
    },
    text: {
        flex: 1
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
)(PhotoAlbumScreen);

var styles =StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: '#f8f2f2'
    }
});
   