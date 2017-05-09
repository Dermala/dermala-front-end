import { StackNavigator } from 'react-navigation';
import LandingScreen from './screens/LandingScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import CreateAccountScreen from './screens/CreateAccountScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import PhotoAlbumScreen from './screens/PhotoAlbumScreen.js';
import PhotoCaptureScreen from './screens/PhotoCaptureScreen.js';
import PhotoNotesScreen from './screens/PhotoNotesScreen.js';
import PhotoTimelapseScreen from './screens/PhotoTimelapseScreen.js';
import ProductsScreen from './screens/ProductsScreen.js';
import SplashScreen from './screens/SplashScreen.js';


const App = StackNavigator({
  Landing: { screen: LandingScreen },
  Splash: { screen: SplashScreen },
  Landing: { screen: LandingScreen },
  Home: { screen: HomeScreen },
  PhotoNotes: { screen: PhotoNotesScreen },
  Splash: {screen: SplashScreen },
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  CreateAccount: { screen: CreateAccountScreen },
  Profile: { screen: ProfileScreen },
  PhotoAlbum: { screen: PhotoAlbumScreen },
  PhotoCapture: { screen: PhotoCaptureScreen },  
  PhotoTimelapse: { screen: PhotoTimelapseScreen },
  Products: { screen: ProductsScreen }
})

export default App;