import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import ProductsScreen from './screens/ProductsScreen.js';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Products: { screen: ProductsScreen }
})

export default App;