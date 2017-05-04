import React from 'react';
import { Text, Button, View} from 'react-native';

class PhotoTimelapseScreen extends React.Component {
    static navigationOptions = {
        title: 'Timelapse'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Progress</Text>
                <Button
                    title="Done"
                    onPress={() => {
                        navigate('Home')
                    }}></Button>
            </View>
        );
    }
}

export default PhotoTimelapseScreen;