import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class ProductsScreen extends React.Component {
    state = {  }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.mainContainer }>            
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }>
                        <View style={ styles.icon}>
                            <Image
                                style = { styles.image }
                                source={require('../assets/images/Group 2.png')}
                            />
                        </View>
                    </View>
                    <View style={ styles.photoContainer }>
                        <View style={ styles.icon }>
                            <Image
                                style = { styles.image }
                                source={require('../assets/images/Jar with Pads.png')}
                            />
                        </View>                       
                    </View>
                </View>
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }>
                        <View style={ styles.icon }>
                            <Image
                                style = { styles.image }
                                source={require('../assets/images/Probiotic.png')}
                            />
                        </View>
                    </View>
                    <View style={ styles.photoContainer }>
                        <View style={ styles.icon }>
                            <Image
                                style = { styles.image }
                                source={require('../assets/images/Spot Treatment.png')}
                            />
                        </View>                       
                    </View>
                </View>
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }>
                        <View style={ styles.icon }>
                            <Image
                                style = { styles.image }
                                source={require('../assets/images/Packet.png')}
                            />
                        </View>
                    </View>
                    <View style={ styles.photoContainer }>
                        <View style={ styles.icon }>
                            <Image
                                style = { styles.image }
                                source={require('../assets/images/Zinc.png')}
                            />
                        </View>                       
                    </View>
                </View>
            </View>
        );
    }
}

export default ProductsScreen;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f8f2f2',
        alignItems: 'stretch',

    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
    },
    photoContainer: {
        flex: 1,
        alignItems: 'stretch',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 100, 
        width: 100,
    }
});
