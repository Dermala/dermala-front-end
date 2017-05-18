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

class PhotoTimelapseScreen extends React.Component {
    static navigationOptions = {
        title: 'Timelapse',
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
                <PhotoGrid 
                    data= { this.state.photos }
                    itemsPerRow = {3}
                    itemMargin = {1}
                    renderItem = {this.renderItem}
                />
            );
        }
    renderItem(photo, itemSize) {
        return(      
            <View>
                <Image source={{ url: photo.imageUrl }} style= {{ height: 100, width: 100, borderRadius: 5, padding: 5 }}/>
                <View>  
                    <Text>{photo.postDate}</Text>
                    <Rating
                        rating={ photo.rating }
                        iconWidth={25}
                        iconHeight={25}
                        iconSelected={require('../assets/icons/blackStar.png')}
                        iconUnselected={require('../assets/icons/emptyStar.png')}
                        />
                    <Text>{photo.notes}</Text>  
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
)(PhotoTimelapseScreen);
