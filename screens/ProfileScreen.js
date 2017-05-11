import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, TextInput,TouchableOpacity} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import MultipleChoice from 'react-native-multiple-choice';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

   render(){
       const { navigate } = this.props.navigation;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                 <Text>Name</Text>
                 <TextInput 
                 style={styles.input}
                 />
                <Text>Skin Type</Text>
                    <ModalDropdown
                    style={styles.dropDownContainer}
                    options={['Normal','Oily','Combination','Sensitive','Dry']}
                    />
                 <View style={styles.dropDownContainer}>
                    <ModalDropdown>
                    <MultipleChoice
                    options={[
                        'Blackheads', 
                        'Whiteheads' , 
                        'Cystic acne', 
                        'Frequent Acne', 
                        'Occassional Acne'
                        ]}
                        selectedOptions={['options']}
                        maxSelectedOptions={3}
                    />
                    </ModalDropdown>
                </View> 
                        
                        
                        
               
                    
                  
                <Text>Typical Breakout Zone</Text>
                    <ModalDropdown  
                    style={styles.dropDownContainer}
                    options={['Forehead', 'Temples' , 'Cheeks', 'Hairline', 'Nose','Jaw','Chin']}/>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Button
                    title="Save >"
                    onPress={() => {
                        navigate('Home', {productId: ''})
                    }}></Button>
                </TouchableOpacity>
             </View>
          </View>
        );
    }
}



var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f2f2'
    },
     container:{
        padding: 20,
    },
    dropDownContainer: {
        height: 40,
        backgroundColor: '#f8f8ff',
        marginBottom: 20,
        marginTop: 20
    },
    input: {
        height: 40,
        backgroundColor: '#f8f8ff',
        marginBottom: 20,
        marginTop: 20
    },
    buttonContainer: {
        backgroundColor: '#dee5c9',
        bottom: 0
    },
    buttonText: {
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 20
    }
});