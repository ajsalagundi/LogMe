import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();
// import Navigation from './routes/index';
import DataEntryForm from './screens/DataEntryForm';

export default function App() {
	return (
		<Provider store={store}>
			{/* <Navigation /> */}
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="Dashboard" component={DashboardScreen} />
					<Stack.Screen name="DataForm" component={DataEntryForm} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
