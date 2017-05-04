import React from 'react';
import { Text, Button, View } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
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
            </View>
        );
    }
}

export default HomeScreen;
