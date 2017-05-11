import React from 'react';
import { Text, Button, View, Image} from 'react-native';
import { ImagePicker } from 'expo';

class PhotoCaptureScreen extends React.Component {
    state = {
        image: null,
    }
    static navigationOptions = {
        title: 'Timelapse'
    };
    render() {
        let { image } = this.state;

        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage} 
                />
                {image &&
                    <Image source={{ uri: image}} style={{ width: 200, height: 200}} />}
            </View>
        );
    }
    _pickImage = async() =>{
        let result = await ImagePicker.launchCameraAsync({
           allowsEditing: true,
           aspect: [4,3], 
        });

        }
    }
export default PhotoCaptureScreen;