import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, TextInput,TouchableOpacity} from 'react-native';
import MultipleChoice from 'react-native-multiple-choice';
import ModalPicker from 'react-native-modal-picker'

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

    state ={
        skinType: '',
        acneType: '',
        typicalBreakoutZone:''
    }

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
        ];
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
                <View style={styles.innerContainer}>
                    <View style={ styles.inputContainer }>
                        <Text style={{fontSize:20}}>Name</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={ styles.inputContainer }>
                    <Text style={ styles.text }>Skin Type:</Text> 
                        <ModalPicker
                            data={x}
                            onChange={(option)=>{this.setState({skinType: option.label})} }>
                            <TextInput 
                                style={{ backgroundColor: '#f8f8ff', padding:10, height:40}}
                                editable={false}
                                placeholder="Select"
                                value={this.state.skinType} />
                        </ModalPicker>
                    </View>
                    <View style={ styles.inputContainer }>    
                        <Text style={ styles.text }>Acne Type:</Text>
                        <ModalPicker
                            data={y}
                            onChange={(option)=>{this.setState({acneType: option.label})} }>
                        <TextInput
                            style={{ backgroundColor: '#f8f8ff', padding:10, height:40}} 
                            editable={false}
                            placeholder="Select"
                            value={this.state.acneType}/>
                        </ModalPicker>   
                    </View>
                    <View style={ styles.inputContainer }>
                        <Text style={ styles.text }>Typical Breakout Zone:</Text>
                        <ModalPicker
                            data={z}
                            onChange={(option)=>{this.setState({typicalBreakoutZone: option.label})} }>
                        <TextInput
                            style={{ backgroundColor: '#f8f8ff', padding:10, height:40}} 
                            editable={false}
                            placeholder="Select"
                            value={this.state.typicalBreakoutZoneType}/>
                        </ModalPicker>
                     </View>
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
     innerContainer: {
        padding: 20,
    },
    inputContainer: {
        padding: 5
    },
    input: {
        height: 40,
        backgroundColor: '#f8f8ff',
        marginBottom: 20,
        marginTop: 20
    },
    buttonContainer: {
        backgroundColor: '#dee5c9',
        marginTop: 50
    },
    text: {
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 10
    },
    buttonText: {
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 20
    }
});