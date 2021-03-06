import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, TouchableHighlight, Linking } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

class ProductsScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: <Button 
                        onPress={() => Linking.openURL('http://phpstack-54297-258275.cloudwaysapps.com/shop/')}
                        title="Buy"
                        color='black' />,
    };
    state = {  }
    render() {
        const { navigate } = this.props.navigation;
        return (
            
            <View style={ styles.mainContainer }>            
                <View style={ styles.sectionContainer }>
                    <TouchableHighlight
                        style={ styles.link }
                        onPress={() => Linking.openURL('http://phpstack-54297-258275.cloudwaysapps.com/browse/acne-clearing-system/')}
                        underlayColor = {'transparent'}
                        >   
                    <View style={ styles.photoContainer }>                            
                        <Svg height="100" width="100">
                            <Circle
                                cx="50"
                                cy="50"
                                r="50"
                                fill="#DEE5C8"
                                stroke="#EAEAEC"
                                strokeWidth="2"
                                />
                                <Image
                                    style = { styles.image }
                                    source={require('../assets/images/Group 2.png')}
                                />                             
                        </Svg>                                           
                        <View style={ styles.text }>
                            <Text style={{ textAlign: 'center' }}>Complete Acne Clearing System</Text>
                            <Text>$49.99</Text>
                        </View>                    
                    </View>
                    </TouchableHighlight> 
                    <TouchableHighlight
                        style={ styles.link }
                        onPress={() => Linking.openURL('http://phpstack-54297-258275.cloudwaysapps.com/shop/acne-clearing-system/acne-treatment-pads/')}
                        underlayColor = {'transparent'}
                        > 
                    <View style={ styles.photoContainer }>
                        <Svg height="100" width="100">
                        <Circle
                            cx="50"
                            cy="50"
                            r="50"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                            style = { styles.image }
                            source={require('../assets/images/Jar with Pads.png')}
                            />
                        </Svg>  
                        <View style={ styles.text }>
                            <Text style={{ textAlign: 'center' }}>Acne Treatment Pads</Text>
                            <Text>$29.99</Text>
                        </View>                    
                    </View>
                    </TouchableHighlight>
                </View>          
                <View style={ styles.sectionContainer }>
                    <TouchableHighlight
                    style={ styles.link }
                    onPress={() => Linking.openURL('http://phpstack-54297-258275.cloudwaysapps.com/shop/acne-clearing-system/probiotics/')}
                    underlayColor = {'transparent'}
                    > 
                    <View style={ styles.photoContainer }>
                        <Svg height="100" width="100">
                        <Circle
                            cx="50"
                            cy="50"
                            r="50"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Probiotic.png')}
                            />
                        </Svg>
                        <View style={ styles.text }>
                            <Text style={{ textAlign: 'center' }}>Advanced Probiotics</Text>
                            <Text>$19.99</Text>
                        </View>
                    </View>
                    </TouchableHighlight> 
                    <TouchableHighlight
                        style={ styles.link }
                        onPress={() => Linking.openURL('http://phpstack-54297-258275.cloudwaysapps.com/shop/general/acne-spot-treatment/')}
                        underlayColor = {'transparent'}
                        > 
                    <View style={ styles.photoContainer }>
                        <Svg height="100" width="100">
                        <Circle
                            cx="50"
                            cy="50"
                            r="50"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Spot Treatment.png')}
                            />
                        </Svg> 
                        <View style={ styles.text }> 
                            <Text style={{ textAlign: 'center' }}>Acne Spot Treatment</Text>
                            <Text>$14.99</Text>
                        </View>                     
                    </View>
                    </TouchableHighlight> 
                </View>                
                <View style={ styles.sectionContainer }>
                    <TouchableHighlight
                        style={ styles.link }
                        onPress={() => Linking.openURL('http://phpstack-54297-258275.cloudwaysapps.com/shop/acne-clearing-system/acne-dots/')}
                        underlayColor = {'transparent'}
                        > 
                    <View style={ styles.photoContainer }>
                        <Svg height="100" width="100" style={styles.circles}>
                        <Circle
                            cx="50"
                            cy="50"
                            r="50"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Packet.png')}
                            />
                        </Svg> 
                        <View style={ styles.text }>
                            <Text style={{ textAlign: 'center' }}>Acne Pimple Patches</Text>
                            <Text>$9.99</Text>
                        </View>                 
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={ styles.link }
                        onPress={() => Linking.openURL('http://phpstack-54297-258275.cloudwaysapps.com/shop/general/new-acne-product/')}
                        underlayColor = {'transparent'}
                        >
                    <View style={ styles.photoContainer }>
                        <Svg height="100" width="100">
                        <Circle
                            cx="50"
                            cy="50"
                            r="50"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Zinc.png')}
                            />
                        </Svg>  
                        <View style={ styles.text }>
                            <Text style={{ textAlign: 'center' }}>Zinc</Text>
                            <Text>$9.99</Text>
                        </View>                     
                    </View>
                    </TouchableHighlight>
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },

    photoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },

    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },

    circles: {
        padding: 20,
    },

    text: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 130
    },
    link: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 10
    }
});
