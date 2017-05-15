import React from 'react';
import { Text, Button, View} from 'react-native';
import CheckBox from 'react-native-checkbox';
import 

class PhotoNotesScreen extends React.Component {
    static navigationOptions = {
        title: 'Notes'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Rate your Skin</Text>
                <StarRating
                    maxStars={5}
                    rating={}
                    selectStar={require('./select_star.png')}
                    unSelectStar={require('./unselect_star.png')}
                    valueChanged={this._valueChanged}
                    starSize={25}
                    />
                <CheckBox
                    label='I did not wash my face today.'
                    checked={false}
                    checkedImage={ require('../assets/icons/009-edit.png') }
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I did not use acne products today.'
                    checked={false}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I had more sun exposure than usual.'
                    checked={false}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I worked out/sweat today.'
                    checked={false}
                    onChange={(checked) => console.log('I am checked', checked)}
                    />
                <CheckBox
                    label='I forgot to wash my face today.'
                    checked={false}
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

const mapStateToProps = state => ({
    ...state.notes
});

const mapDispatchToProps = dispatch => ({
    select: () => dispatch(),
    changeField: (key, value) => dispatch(changeField(key, value))
});

export default PhotoNotesScreen;