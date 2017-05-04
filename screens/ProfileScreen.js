import React from 'react';
import { Text, Button, View} from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Create Profile'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Create Your Account!</Text>
                <Button
                    title="Submit"
                    onPress={() => {
                        navigate('Home')
                    }}></Button>
            </View>
        );
    }
}

export default ProfileScreen;