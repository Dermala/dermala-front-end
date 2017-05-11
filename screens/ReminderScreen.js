import React from 'react';
import { Text, Button, View, Image} from 'react-native';
import { ImagePicker } from 'expo';

class ReminderScreen extends React.Component {
     
    static navigationOptions = {
        title: 'Helpful Reminders'
    };
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View>
               
            </View>
        );
    }
}

export default ReminderScreen;