import React from 'react';
import { Text, Button, View} from 'react-native';

class CreateAccountScreen extends React.Component {
    static navigationOptions = {
        title: 'Create Account'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Create Your Account!</Text>
                <Button
                    title="Submit"
                    onPress={() => {
                        navigate('Profile')
                    }}
                 ></Button>
            </View>
        );
    }
}

export default CreateAccountScreen;