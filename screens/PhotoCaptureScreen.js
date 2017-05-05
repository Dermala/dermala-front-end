import React from 'react';
import { Text, Button, View} from 'react-native';

class PhotoCaptureScreen extends React.Component {
    static navigationOptions = {
        title: 'Take Photo'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Take Photo</Text>
                <Button
                    title="Submit"
                    onPress={() => {
                        navigate('PhotoNotes')
                    }}></Button>
            </View>
        );
    }
}

export default PhotoCaptureScreen;