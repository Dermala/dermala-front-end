import React from 'react';
import { Text, Button, View} from 'react-native';

class PhotoAlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'My Album'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>See Photos</Text>
                <Button
                    title="Submit"
                    onPress={() => {
                        navigate('PhotoCapture')
                    }}></Button>
            </View>
        );
    }
}

export default PhotoAlbumScreen;