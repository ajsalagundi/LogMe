import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CSS_CONSTS, HEIGHT, WIDTH } from '../constants';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const handleLogOut = () => {
	return null;
}

const NavBar = (props) => {
	return (
		<View style={styles.navBarContainer}>
			<View style={styles.navBar}>
				<TouchableOpacity style={styles.icon} onPress={handleLogOut}>
					<Feather name="log-out" size={24} color="white" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate("DataForm")}>
					<MaterialIcons name="add-box" size={24} color="white" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.icon}>
					<Feather name="user" size={24} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	navBarContainer: {
		alignSelf: 'flex-start',
		height: '10%',
		width: '100%'
	},
	navBar: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: CSS_CONSTS.DARK_CONTRAST
	},
	icon: {
		paddingHorizontal: 25,
		paddingTop: 45
	}
});
export default NavBar;
