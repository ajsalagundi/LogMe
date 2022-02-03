import React from 'react';
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet } from 'react-native';
import { CSS_CONSTS, HEIGHT, WIDTH } from '../constants';
import NavBar from '../components/NavBar';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const DataEntryForm = (props) => {
	let [ fonts ] = useFonts({
		'Reem-Kufi': require('../assets/fonts/ReemKufi-Regular.ttf')
	});

	if (!fonts) {
		return null;
	} else {
		return (
			<View style={styles.formScreen}>
				<NavBar />
				<View style={styles.controlButtons}>
					<Ionicons name="chevron-back" size={30} color={CSS_CONSTS.PRIMARY_COLOR} style={styles.backButton} />
					<MaterialIcons name="info-outline" size={30} color={CSS_CONSTS.PRIMARY_COLOR} style={styles.infoButton} />
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	formScreen: {
		height: HEIGHT,
		width: WIDTH
	},
	controlButtons: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '10%',
		height: 100,
		width: WIDTH
	},
	backButton: {
		marginLeft: '10%',
	},
	infoButton: {
		marginRight: '10%',
	}
});

export default DataEntryForm;
