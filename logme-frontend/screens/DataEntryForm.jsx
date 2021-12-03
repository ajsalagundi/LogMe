import React from 'react';
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet } from 'react-native';
import { CSS_CONSTS, HEIGHT, WIDTH } from '../constants';

const DataEntryForm = () => {
	let [ fonts ] = useFonts({
		'Reem-Kufi': require('../assets/fonts/ReemKufi-Regular.ttf')
	});

	if (!fonts) {
		return null;
	} else {
		return (
			<View style={styles.formScreen}>
				<Text>Form</Text>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	formScreen: {
		height: HEIGHT,
		width: WIDTH
	}
});

export default DataEntryForm;
