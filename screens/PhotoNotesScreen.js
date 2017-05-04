import React from 'react';
import { Text, Button, View} from 'react-native';

class PhotoNotesScreen extends React.Component {
    static navigationOptions = {
        title: 'Notes'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Rate your Skin</Text>
                <Button
                    title="Add to Album"
                    onPress={() => {
                        navigate('PhotoAlbum')
                    }}></Button>
            </View>
        );
    }
}

export default PhotoNotesScreen;