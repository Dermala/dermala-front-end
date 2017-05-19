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
import PhotoGrid from 'react-native-photo-grid';

import { getAllPhotos } from '../actions/postActions.js'

class PhotoAlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'Album'
    };

    componentDidMount(){
        this.props.fetchPhotos();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
                <PhotoGrid 
                    data= { this.props.photos }
                    itemsPerRow = {3}
                    itemMargin = {1}
                    renderItem = {this.renderItem}
                />
            );
        }
    renderItem(photo, itemSize) {
        return(      
            <View key={photo._id}>
                <Image source={{ url: photo.imageUrl }} style={{ height: 100, width: 100, borderRadius: 5, borderColor: 'black', borderWidth: 1, margin: 1}}/>
                <View>  
                    <Rating
                        rating={ photo.rating }
                        iconWidth={19}
                        iconHeight={19}
                        iconSelected={require('../assets/icons/blackStar.png')}
                        iconUnselected={require('../assets/icons/emptyStar.png')}
                        style={{paddingTop: 5, paddingBottom: 15, margin: 2}}
                        />  
                </View>  
            </View>  
        );
    } 
    
}

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#f8f2f2',
        justifyContent: 'center'
    },
    photoContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
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

   