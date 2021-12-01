import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './routes/index';

export default function App() {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}
