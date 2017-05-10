import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

class ProductsScreen extends React.Component {
    state = {  }
    render() {
        const { navigate } = this.props.navigation;
        return (
            
            <View style={ styles.mainContainer }>            
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }>
                        <Svg height="150" width="150">
                        <Circle
                            cx="70"
                            cy="70"
                            r="70"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Group 2.png')}
                            />
                        <Text>Package</Text>
                        </Svg>
                    </View>
                    <View style={ styles.photoContainer }>
                        <Svg height="150" width="150">
                        <Circle
                            cx="70"
                            cy="70"
                            r="70"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Jar with Pads.png')}
                            />
                        <Text>Package</Text>
                        </Svg>                      
                    </View>
                </View>
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }>
                        <Svg height="150" width="150">
                        <Circle
                            cx="70"
                            cy="70"
                            r="70"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Probiotic.png')}
                            />
                        <Text>Package</Text>
                        </Svg>
                    </View>
                    <View style={ styles.photoContainer }>
                        <Svg height="150" width="150">
                        <Circle
                            cx="70"
                            cy="70"
                            r="70"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Spot Treatment.png')}
                            />
                        <Text>Package</Text>
                        </Svg>                      
                    </View>
                </View>
                <View style={ styles.sectionContainer }>
                    <View style={ styles.photoContainer }>
                        <Svg height="150" width="150">
                        <Circle
                            cx="70"
                            cy="70"
                            r="70"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Packet.png')}
                            />
                        <Text>Package</Text>
                        </Svg> 
                    </View>
                    <View style={ styles.photoContainer }>
                        <Svg height="150" width="150">
                        <Circle
                            cx="70"
                            cy="70"
                            r="70"
                            fill="#DEE5C8"
                            stroke="#EAEAEC"
                            strokeWidth="2"
                        />
                        <Image
                                style = { styles.image }
                                source={require('../assets/images/Zinc.png')}
                            />
                        <Text>Package</Text>
                        </Svg>                       
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
        alignItems: 'center',
        justifyContent: 'center',
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
    }
});
