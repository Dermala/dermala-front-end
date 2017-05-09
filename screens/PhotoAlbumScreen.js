import React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';

class PhotoAlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'My Album'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                     <Button
                    title="View Timelapse"
                    onPress={() => {
                        navigate('PhotoTimelapse', {productId: ''})
                    }}></Button>
                </TouchableOpacity>
            </View>
        );
    }
}

export default PhotoAlbumScreen;

var styles =StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#dee5c9'
    }
})