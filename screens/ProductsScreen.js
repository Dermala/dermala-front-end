import React from 'react';
import { Text, View } from 'react-native';

class ProductsScreen extends React.Component {
    state = {  }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Products Screen</Text>
            </View>
        );
    }
}

export default ProductsScreen;
