import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Logout from '../screens/Logout';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';

const AuthStack = createStackNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
        Logout: Logout,
        Register: RegisterScreen,
    },
    {
        headerMode: "none",
        initialRouteName: "Home",
    }
)

const AppStack = createStackNavigator(
    {
        Dashboard: DashboardScreen,
    },
    {
        headerMode: "none",
        initialRouteName: "Dashboard"
    }
)

const index = createAppContainer(
    createSwitchNavigator(
        {
            Auth: AuthStack,
            App: AppStack
        },
        {
            initialRouteName: "Auth"
        }
    )
)

export default createAppContainer(index)
