import React from 'react';
import { Text, Button, View} from 'react-native';
import CheckBox from 'react-native-checkbox';

class PhotoNotesScreen extends React.Component {
    static navigationOptions = {
        title: 'Notes'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Rate your Skin</Text>
                <CheckBox
                    label='I did not wash my face today.'
                    checked={false}
                    checkedImage={ require('../assets/icons/009-edit.png') }
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I did not use acne products today.'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I had more sun exposure than usual.'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I worked out/sweat today.'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I forgot to wash my face today.'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I ate greasy or sugary foods today.'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I ate dairy today.'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I have been stressed today.'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
            </View>
            
        );
    }
}

export default PhotoNotesScreen;