import React from 'react';
import { connect } from 'react-redux';
import { Text, Button, View, StyleSheet, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import { Container, Content } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { ImagePicker } from 'expo';
import secrets from '../secrets';
import { RNS3 } from 'react-native-aws3';
import uuid from 'uuid/v1';

import { getAllPhotos } from '../actions/postActions.js'

class PhotoAlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'My Album',
        headerLeft: <Button 
                        title="< Home"
                        color='blue' />
    };
    
    componentDidMount(){
        this.props.fetchPhotos();
    }

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={ styles.mainContainer }>
                <TouchableHighlight 
                    onPress={this._pickImage}
                    underlayColor= "#f8f2f2"
                    >
                    <Image
                        style={styles.button}
                        source={require('../assets/icons/add.png')}
                    />                
                </TouchableHighlight>
                
            </View>
            
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
   