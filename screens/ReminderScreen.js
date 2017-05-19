import React from 'react';
import { StyleSheet, Dimensions, Text, Button, View, Image, ScrollView} from 'react-native';
import { ImagePicker } from 'expo';
import Svg, { Circle } from 'react-native-svg';

class ReminderScreen extends React.Component {
     
    static navigationOptions = {
        title: 'Tips'
    };
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (          
            <View style={ styles.mainContainer }>
                <Image
                style={ styles.mainContainer }
                source={require('../assets/logo/Background Fade.png')}
                >
                <ScrollView>
                <View style={ styles.stepContainerSmall }>
                    <Text style={ styles.header }>
                        How to get rid of acne in 5 steps with Dermala:
                    </Text>    
                </View>
                <View style={ styles.stepContainerSmall }>
                    <Image
                        source={require('../assets/icons/One.png')}
                        style={ styles.icon }/>
                    <Text style={ styles.text }>
                        Wash your face in the morning and at night.
                    </Text>
                </View>
                <View style={ styles.stepContainerLrg }>
                    <Image
                        source={require('../assets/icons/Two.png')}
                        style={ styles.icon }/>
                    <Text style={ styles.text }>
                        Apply Dermala’s Acne Treatment Pads to acne-affected areas and Dermala’s Acne Spot Treatment to areas that need more attention. Apply sunscreen and any skincare or makeup products on top.
                    </Text>
                </View>
                <View style={ styles.stepContainerMed }>
                    <Image
                        source={require('../assets/icons/Three.png')}
                        style={ styles.icon }/>
                    <Text style={ styles.text }>
                        Cover whiteheads and inflamed pimples with Dermala’s Acne Pimple Patches to treat blemishes overnight.
                    </Text>
                </View>
                <View style={ styles.stepContainerMed }>
                    <Image
                        source={require('../assets/icons/Four.png')}
                        style={ styles.icon }/>
                    <Text style={ styles.text }>
                        Take Dermala’s Advanced Probiotics (1-3 times daily) and Zinc (1 time daily) with a meal.
                    </Text>
                </View>
                <View style={ styles.stepContainerSmall }>
                    <Image
                        source={require('../assets/icons/Five.png')}
                        style={ styles.icon }/>
                    <Text style={ styles.text }>
                        Repeat for at least 2 months to balance your skin and gut microbiome for a clear and beautiful complexion.
                    </Text>
                </View>
             </ScrollView>
             </Image>
             
            </View>
        );
    }
}

export default ReminderScreen;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    stepContainerSmall: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10
    },
    stepContainerMed: {
        flex: 2,
        flexDirection: 'row',
        paddingBottom: 10
    },
    stepContainerLrg: {
        flex: 3,
        flexDirection: 'row',
        paddingBottom: 10
    },
    image: {
        flex: 1, 
        resizeMode: 'cover'
    },
    icon: {
        flex: 1,
        resizeMode: 'contain',
    },
    header: {
        backgroundColor: 'transparent',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
        paddingLeft: 20
    },
    text: {
        flex: 5,
        backgroundColor: 'transparent',
        fontSize: 16,
        paddingLeft: 5,
        paddingRight: 5
    }
});