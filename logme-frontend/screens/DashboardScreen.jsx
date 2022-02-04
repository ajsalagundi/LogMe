import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { CSS_CONSTS, HEIGHT, WIDTH } from '../constants';
import NavBar from '../components/NavBar';

const DashboardScreen = (props) => {
	let [ fonts ] = useFonts({
		'Reem-Kufi': require('../assets/fonts/ReemKufi-Regular.ttf')
	});
	
	if (!fonts) {
		return null;
	} else {
		return (
			<View style={styles.loginScreen}>
				<NavBar />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	loginScreen: {
		height: HEIGHT,
		width: WIDTH,
		flex: 1,
		alignItems: 'center'
	}
});

export default DashboardScreen;
