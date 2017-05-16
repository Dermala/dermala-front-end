import React from 'react';
import { StackNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen.js';
import LandingScreen from '../screens/LandingScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import CreateAccountScreen from '../screens/CreateAccountScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js'; 
import PhotoAlbumScreen from '../screens/PhotoAlbumScreen.js';
import ReminderScreen from '../screens/ReminderScreen.js';
import PhotoNotesScreen from '../screens/PhotoNotesScreen.js';
import PhotoTimelapseScreen from '../screens/PhotoTimelapseScreen.js';
import ProductsScreen from '../screens/ProductsScreen.js';

const AppNavigator = StackNavigator({
    
    Splash: { screen: SplashScreen },
    Landing: { screen: LandingScreen },  
    Login: { screen: LoginScreen },
    CreateAccount: { screen: CreateAccountScreen },
    Profile: { screen: ProfileScreen },
    Home: { screen: HomeScreen }, 
    PhotoNotes: { screen: PhotoNotesScreen },
    PhotoAlbum: { screen: PhotoAlbumScreen },
    PhotoTimelapse: { screen: PhotoTimelapseScreen },
    Reminders: { screen: ReminderScreen }, 
    Products: { screen: ProductsScreen }
});

export default AppNavigator;