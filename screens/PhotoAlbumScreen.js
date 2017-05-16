import React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { ImagePicker } from 'expo';


class PhotoAlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'My Album'
    };

    render() {
        const { navigate } = this.props.navigation;
        
        return (
             <View style={ styles.mainContainer }>            
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }> 
                        <Image 
                            style={ styles.icon }
                            source={require('../assets/icons/add.png')}/>                     
                    </View>
                </View>
                <View style={ styles.sectionContainer }>
                </View>
                <View style={ styles.sectionContainer }>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Button
                            title="View Timelapse"
                            onPress={() => {
                            navigate('PhotoTimelapse', {productId: ''})
                            }}></Button>
                        <View>
                            <Image 
                            style={ styles.icon }
                            source={require('../assets/icons/add.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
           
        );
    }

     _pickImage = async() =>{
        let result = await ImagePicker.launchCameraAsync({
           allowsEditing: true,
           aspect: [4,3], 
        });

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
    buttonContainer: {
        backgroundColor: '#dee5c9'
    }
})