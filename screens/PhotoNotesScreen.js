import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-checkbox';
import Rating from 'react-native-easy-rating';
import { addPhoto } from '../actions/postActions';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class PhotoNotesScreen extends React.Component {
    static navigationOptions = {
        title: 'Notes'
    };

    state = {
        rating: 0,
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        notes: ""
    }

    submitPhoto = () => {
        const newPhoto = {
            imageUrl: this.props.navigation.state.params.url,
            postDate: new Date(),
            rating: this.state.rating,
            question1: this.state.question1,
            question2: this.state.question2,
            question3: this.state.question3, 
            question4: this.state.question4,
            question5: this.state.question5,
            question6: this.state.question6,
            notes: this.state.notes
        };

        this.props.submitPhoto(newPhoto);
        
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'PhotoAlbum'})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.mainContainer }>          
                <View style={ styles.sectionContainer }>
                    <View style={ styles.ratingContainer}>
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
                    <View style={ styles.photoContainer }>
                    {/*<Image
                        source={{url: this.props.navigation.state.params.url}}
                        style={ styles.image }
                    />*/}
                    </View>
                </View>                
                <View style={ styles.questionContainer }>
                    <Text style={ styles.text }>Check all that apply</Text>
                    <View>
                    <CheckBox
                        label='I did not wash my face today.'
                        checked={this.state.question1}
                        onChange={(checked) => this.setState({question1: checked})}
                        uncheckedImage={require('../assets/icons/circle.png')}
                        checkedImage={require('../assets/icons/checkedGreen.png')}
                        />
                    </View>
                    <View style={ styles.checkboxContainer }>
                    <CheckBox
                        label='I did not use acne products today.'
                        checked={this.state.question2}
                        onChange={(checked) => this.setState({question2: checked})}
                        uncheckedImage={require('../assets/icons/circle.png')}
                        checkedImage={require('../assets/icons/checkedGreen.png')}
                        />
                    </View>
                    <View style={ styles.checkboxContainer }>
                    <CheckBox
                        label='I had more sun exposure than usual.'
                        checked={this.state.question3}
                        onChange={(checked) => this.setState({question3: checked})}
                        uncheckedImage={require('../assets/icons/circle.png')}
                        checkedImage={require('../assets/icons/checkedGreen.png')}
                        />
                    </View>
                    <View style={ styles.checkboxContainer }>
                    <CheckBox
                        label='I worked out/sweat today.'
                        checked={this.state.question4}
                        onChange={(checked) => this.setState({question4: checked})}
                        uncheckedImage={require('../assets/icons/circle.png')}
                        checkedImage={require('../assets/icons/checkedGreen.png')}
                        />
                    </View>
                    <View style={ styles.checkboxContainer }>
                    <CheckBox
                        label='I ate sugary foods or dairy today.'
                        checked={this.state.question5}
                        onChange={(checked) => this.setState({question5: checked})}
                        uncheckedImage={require('../assets/icons/circle.png')}
                        checkedImage={require('../assets/icons/checkedGreen.png')}
                        />
                    </View>
                    <View style={ styles.checkboxContainer }>
                    <CheckBox
                        label='I have been stressed today.'
                        checked={this.state.question6}
                        onChange={(checked) => this.setState({question6: checked})}
                        uncheckedImage={require('../assets/icons/circle.png')}
                        checkedImage={require('../assets/icons/checkedGreen.png')}
                        />
                    </View>
                </View >
                <View style={ styles.notesContainer }>
                    <Text 
                        style={ styles.text }
                        >Additional Notes:</Text>
                    <TextInput
                        value={this.state.notes}
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={(notes) => this.setState({notes})}
                        style={styles.input}/>
                </View>                
                <TouchableOpacity style={ styles.buttonContainer }>
                    <Button
                    color="black"
                    title="Post"
                    onPress={() => {
                        this.submitPhoto()
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
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    ratingContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    photoContainer: {
        flex: 1, 
        alignItems: 'flex-end', 
        paddingRight: 5,   
    },
    questionContainer: {
        flex: 4,
        flexDirection: 'column',
        padding: 10
    },
    checkboxContainer: {
        flex: 1,
        flexDirection: 'column'
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
        paddingBottom: 5,
    },
    button: {
        backgroundColor: 'transparent'
    },
    input: {
        height: 40,
        backgroundColor: '#f8f8ff',
        marginBottom: 20,
        marginTop: 20,
        padding: 5,
        borderRadius: 10,
    },
    image: {
        height: 80,
        width: 80,
    }
});

const mapStateToProps = state => ({
    ...state.notes
});

const mapDispatchToProps = dispatch => ({
    select: () => dispatch(),
    submitPhoto: (photo) => dispatch(addPhoto(photo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoNotesScreen);