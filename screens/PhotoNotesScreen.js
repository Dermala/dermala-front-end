import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import CheckBox from 'react-native-checkbox';
import Rating from 'react-native-easy-rating';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { addPhoto } from '../actions/postActions';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class PhotoNotesScreen extends React.Component {
    static navigationOptions = {
        header: null
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
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
                NavigationActions.navigate({ routeName: 'PhotoAlbum'})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            
            <View style={ styles.mainContainer }>
                <ScrollView>          
                <View style={ styles.subContainer }>
                    <View style={ styles.sectionContainer }>
                        <View style={ styles.ratingContainer}>
                        <Text style={ styles.text }>Rate your Skin</Text>
                        <Rating
                            rating={0}
                            max={5}
                            iconWidth={30}
                            iconHeight={30}
                            iconSelected={require('../assets/icons/blackStar.png')}
                            iconUnselected={require('../assets/icons/emptyStar.png')}
                            onRate={(rating) => this.setState({rating: rating})}/>
                        </View>
                        <View style={ styles.ratingContainer}>
                        <Image
                            source={{url: this.props.navigation.state.params.url}}
                            style={ styles.image }
                        />
                        </View>
                    </View>                
                    <View style={ styles.questionContainer }>
                        <Text style={ styles.text }>Check all that apply</Text>
                        <View>
                        <CheckBox
                            label='I did not wash my face today.'
                            style={ styles.label }
                            onChange={(checked) => this.setState({question1: !checked})}
                            uncheckedImage={require('../assets/icons/circle.png')}
                            checkedImage={require('../assets/icons/checkedGreen.png')}
                            />
                        </View>
                        <View style={ styles.checkboxContainer }>
                        <CheckBox
                            label='I did not use acne products today.'
                            onChange={(checked) => this.setState({question2: !checked})}
                            uncheckedImage={require('../assets/icons/circle.png')}
                            checkedImage={require('../assets/icons/checkedGreen.png')}
                            />
                        </View>
                        <View style={ styles.checkboxContainer }>
                        <CheckBox
                            label='I had more sun exposure than usual.'
                            onChange={(checked) => this.setState({question3: !checked})}
                            uncheckedImage={require('../assets/icons/circle.png')}
                            checkedImage={require('../assets/icons/checkedGreen.png')}
                            />
                        </View>
                        <View style={ styles.checkboxContainer }>
                        <CheckBox
                            label='I worked out/sweat today.'
                            onChange={(checked) => this.setState({question4: !checked})}
                            uncheckedImage={require('../assets/icons/circle.png')}
                            checkedImage={require('../assets/icons/checkedGreen.png')}
                            />
                        </View>
                        <View style={ styles.checkboxContainer }>
                        <CheckBox
                            label='I ate sugary foods or dairy today.'
                            onChange={(checked) => this.setState({question5: !checked})}
                            uncheckedImage={require('../assets/icons/circle.png')}
                            checkedImage={require('../assets/icons/checkedGreen.png')}
                            />
                        </View>
                        <View style={ styles.checkboxContainer }>
                        <CheckBox
                            label='I have been stressed today.'
                            onChange={(checked) => this.setState({question6: !checked})}
                            uncheckedImage={require('../assets/icons/circle.png')}
                            checkedImage={require('../assets/icons/checkedGreen.png')}
                            />
                        </View>
                    </View >
                    <View style={ styles.notesContainer }>
                        <Text style={ styles.text }>
                            Additional Notes:
                        </Text>
                        <TextInput
                            value={this.state.notes}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={(notes) => this.setState({notes})}
                            style={styles.input}/>
                            <KeyboardSpacer/> 
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
            </ScrollView>
            </View>
        
            
        );
    }
}

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#f8f2f2',
        justifyContent: 'center'
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop: 30,
        justifyContent: 'center'
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20
    },
    ratingContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
        flexDirection: 'column',
    },
    notesContainer: {
        flex: 2,
        padding: 10
    },
    buttonContainer: {
        flex: .8,
        justifyContent: 'center',
        backgroundColor: '#dee5c9',
        padding: 10
    },
    icon: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        paddingBottom: 10,
    },
    button: {
        backgroundColor: 'transparent'
    },
    input: {
        height: 60,
        backgroundColor: '#f8f8ff',
        marginBottom: 20,
        marginTop: 20,
        padding: 5,
        borderRadius: 10,
        fontSize: 16
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        paddingRight: 10,
    },
    label: {
        fontSize: 16,
        color: 'black'
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



