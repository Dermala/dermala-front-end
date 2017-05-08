import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, TextInput,TouchableOpacity} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

   render(){
       const { navigate } = this.props.navigation;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                 <Text style={styles.title}>
                   Name
                 </Text>
                 <TextInput 
                 style={styles.input}
                 />
                <Text>
                     Skin Type</Text>
                    <ModalDropdown
                    style={styles.container}
                    options={['Normal','Oily','Combination','Sensitive','Dry']}
                    />
                 <Text>Acne Type</Text> 
                    <ModalDropdown  
                    style={styles.container}
                    options={['Blackheads', 'Whiteheads' , 'Cystic acne', 'Frequent Acne', 'Occassional Acne']}/>
                <Text>Typical Breakout Zone</Text>
                    <ModalDropdown  
                    style={styles.container}
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
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#f8f8ff',
        marginBottom: 20,
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