import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, TextInput,TouchableOpacity} from 'react-native';
import MultipleChoice from 'react-native-multiple-choice';
import ModalPicker from 'react-native-modal-picker'

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile'
    };


   render(){
       const { navigate } = this.props.navigation;
       let i = 0;
       const x = [
            {key: i++, label:'Normal'},
            {key: i++, label: 'Oily'},
            {key: i++, label: 'Combination'},
            {key: i++, label: 'Sensitive'},
            {key: i++, label: 'Dry'},
       ]
        let j = 0;
        const y= [    
            {key: j++, label:'Blackheads'},
            {key: j++, label:'Whiteheads'},
            {key: j++, label:'Cystic Acne'},
            {key: j++, label:'Frequent Acne'},
            {key: j++, label:'Occassional Acne'}
        ]
        let k = 0;
        const z = [
            {key:k++, label:'Forehead'},
            {key:k++, label:'Temples'},
            {key:k++, label:'Cheeks'},
            {key:k++, label:'Hairline'},
            {key:k++, label:'Nose'},
            {key:k++, label:'Jaw'},
            {key:k++, label:'Chin'}
        ]
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                 <Text>Name</Text>
                    <TextInput style={styles.input}/>
            <Text>Skin Type</Text> 
                <ModalPicker
                    data={x}>
                    <View style={styles.dropDownContainer}/> 
                </ModalPicker>
                
            <Text>Acne Type</Text>
                <ModalPicker
                    data={y}>
                <View style={styles.dropDownContainer}/>  
                </ModalPicker>   

            <Text>Typical Breakout Zone</Text>
            <ModalPicker
                    data={z}>
                <View style={styles.dropDownContainer}/>
            </ModalPicker>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Button
                    title="Save >"
                    color="black"
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