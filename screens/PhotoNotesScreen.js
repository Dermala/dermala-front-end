import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-checkbox';
import Rating from 'react-native-easy-rating';

class PhotoNotesScreen extends React.Component {
    static navigationOptions = {
        title: 'Notes'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.mainContainer }>           
                <View style={ styles.ratingContainer }>
                    <Text style={ styles.text }>Rate your Skin</Text>
                    <Rating
                        rating={1}
                        max={5}
                        iconWidth={25}
                        iconHeight={25}
                        iconSelected={require('../assets/icons/blackStar.png')}
                        iconUnselected={require('../assets/icons/emptyStar.png')}
                        onRate={(rating) => this.setState({rating: rating})}/>
                </View>
                <View style={ styles.sectionContainer }>
                    <Text style={ styles.text }>Check all that apply</Text>
                    <CheckBox
                        label='I did not wash my face today.'
                        checked={false}
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
                </View >
                <View style={ styles.notesContainer }>
                    <Text 
                        style={ styles.text }
                        multiline = {true}
                        numberOfLines = {3}
                        >Additional Notes:</Text>
                    <TextInput
                    style={styles.input}/>
                </View>                
                <TouchableOpacity style={ styles.buttonContainer }>
                    <Button
                    color="black"
                    title="Post"
                    onPress={() => {
                        navigate('PhotoAlbum')
                    }}></Button>
                </TouchableOpacity>                        
            </View>
            
        );
    }
}

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    ratingContainer: {
        flex: 1,
        padding: 10
    },
    sectionContainer: {
        flex: 4,
        padding: 10
    },
    notesContainer: {
        flex: 2,
        padding: 10
    },
    buttonContainer: {
        flex: .8,
        justifyContent: 'center',
        backgroundColor: '#dee5c9',
        bottom: 1,
        padding: 10
    },
    icon: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    },
    button: {
        backgroundColor: 'transparent'
    },
    input: {
        height: 40,
        backgroundColor: '#f8f8ff',
        marginBottom: 20,
        marginTop: 20,
        padding: 5
    }
});

const mapStateToProps = state => ({
    ...state.notes
});

const mapDispatchToProps = dispatch => ({
    select: () => dispatch(),
    changeField: (key, value) => dispatch(changeField(key, value))
});

export default PhotoNotesScreen;