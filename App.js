import { StackNavigator } from 'react-navigation';
import LandingScreen from './screens/LandingScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import CreateAccountScreen from './screens/CreateAccountScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import PhotoAlbumScreen from './screens/PhotoAlbumScreen.js';
import ReminderScreen from './screens/ReminderScreen.js';
import PhotoNotesScreen from './screens/PhotoNotesScreen.js';
import PhotoTimelapseScreen from './screens/PhotoTimelapseScreen.js';
import ProductsScreen from './screens/ProductsScreen.js';
import SplashScreen from './screens/SplashScreen.js';


const App = StackNavigator({
  Home: { screen: HomeScreen }, 
  Landing: { screen: LandingScreen },
  Splash: { screen: SplashScreen },
  PhotoNotes: { screen: PhotoNotesScreen },
  
  Login: { screen: LoginScreen },
  CreateAccount: { screen: CreateAccountScreen },
  Profile: { screen: ProfileScreen },
  PhotoAlbum: { screen: PhotoAlbumScreen },
  Reminders: { screen: ReminderScreen },  
  PhotoTimelapse: { screen: PhotoTimelapseScreen },
  Products: { screen: ProductsScreen }
})

export default App;