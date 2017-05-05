import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen.js';
import LandingScreen from './screens/LandingScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import CreateAccountScreen from './screens/CreateAccountScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import PhotoAlbumScreen from './screens/PhotoAlbumScreen.js';
import PhotoCaptureScreen from './screens/PhotoCaptureScreen.js';
import PhotoNotesScreen from './screens/PhotoNotesScreen.js';
import PhotoTimelapseScreen from './screens/PhotoTimelapseScreen.js';
import ProductsScreen from './screens/ProductsScreen.js';


const App = StackNavigator({
  Landing: { screen: LandingScreen },
  Login: { screen: LoginScreen },
  CreateAccount: { screen: CreateAccountScreen },
  Profile: { screen: ProfileScreen },
  Home: { screen: HomeScreen },
  PhotoAlbum: { screen: PhotoAlbumScreen },
  PhotoCapture: { screen: PhotoCaptureScreen },
  PhotoNotes: { screen: PhotoNotesScreen },
  PhotoTimelapse: { screen: PhotoTimelapseScreen },
  Products: { screen: ProductsScreen }
})

export default App;