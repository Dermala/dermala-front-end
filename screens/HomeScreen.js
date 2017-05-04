import React from 'react';
import { Text, Button, View } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Welcome Home!</Text>
                <Button
                    title="Go to Products Screen"
                    onPress={() => {
                        navigate('Products', { productId: 'Sabrina and Pamela are cool, yo' })
                    }}></Button>
                <Button
                    title="Take a Photo"
                    onPress={() => {
                        navigate('PhotoCapture', { productId: 'Sabrina and Pamela are cool, yo' })
                    }}></Button>
                <Button
                    title="View Album"
                    onPress={() => {
                        navigate('PhotoAlbum', { productId: 'Sabrina and Pamela are cool, yo' })
                    }}></Button>
                <Button
                    title="View Progress"
                    onPress={() => {
                        navigate('PhotoTimelapse', { productId: 'Sabrina and Pamela are cool, yo' })
                    }}></Button>
            </View>
        );
    }
}

export default HomeScreen;
