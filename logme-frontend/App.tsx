import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen
  }
)

export default createAppContainer(navigator);