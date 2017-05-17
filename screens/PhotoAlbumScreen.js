import React from 'react';
import { Text, Button, View, StyleSheet, TouchableHighlight, Image} from 'react-native';
import { ImagePicker } from 'expo';


class PhotoAlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'My Album'
    };

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={ styles.mainContainer }>        
                    <View style={styles.container}>
                        <TouchableHighlight onPress={this._pickImage}>
                            <Image
                                style={styles.button}
                                source={require('../assets/icons/add.png')}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
           
          
           
        );
    }


                        

     _pickImage = async() =>{
         ImagePicker.launchCameraAsync({
           allowsEditing: true,
           aspect: [4,3], 
        })
        .then(result => {
            console.log('Picture Taken');
        })

        }
}

export default PhotoAlbumScreen;

var styles =StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f2f2',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',

    },
    photoContainer: {
        flex: 1,
        alignItems: 'stretch',

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
    },
    button: {
        padding: 10,
  	    borderRadius: 5,
  	    color: 'white'
    }
})