import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { CSS_CONSTS, HEIGHT, WIDTH } from '../constants';
import ErrorMesssageModal from '../components/ErrorMesssageModal';

const LoginScreen = (props) => {
	let [ fonts ] = useFonts({
		'Reem-Kufi': require('../assets/fonts/ReemKufi-Regular.ttf')
	});
	const [ password, setpassword ] = useState('');
	const [ username, setusername ] = useState('');

	if (!fonts) {
		return null;
	} else {
		return (
			<View style={styles.loginScreen}>
				<Text style={styles.title} onPress={() => props.navigation.navigate('Home')}>
					logme
				</Text>
				<View style={styles.userInputs}>
					<View style={styles.usernameInput}>
						<FontAwesome5 name="user" size={24} color="black" style={styles.icon} />
						<TextInput
							style={styles.input}
							onChangeText={(e) => setusername(e)}
							value={username}
							autoCapitalize="none"
							autoCorrect={false}
							placeholder={'Username'}
						/>
					</View>
					<View style={styles.passwordInput}>
						<MaterialCommunityIcons
							name="form-textbox-password"
							size={24}
							color="black"
							style={styles.icon}
						/>
						<TextInput
							style={styles.input}
							onChangeText={(e) => setpassword(e)}
							value={password}
							autoCapitalize="none"
							autoCorrect={false}
							placeholder={'Password'}
						/>
					</View>
				</View>
				<TouchableOpacity style={styles.login} onPress={() => props.navigation.navigate('Dashboard')}>
					<Text style={styles.loginText} >
						Login
					</Text>
				</TouchableOpacity>
				<Text style={styles.signupText} onPress={() => props.navigation.navigate('Register')}>
					Don't have an account? Sign up now!
				</Text>
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
	},
	title: {
		color: CSS_CONSTS.PRIMARY_COLOR,
		fontSize: 48,
		marginTop: '50%',
		fontFamily: 'Reem-Kufi'
	},
	userInputs: {
		marginTop: '30%',
		width: '80%',
		height: '20%',
		justifyContent: 'center'
	},
	icon: {
		paddingHorizontal: 15,
		paddingTop: 25
	},
	usernameInput: {
		flex: 1,
		flexDirection: 'row',
		borderColor: CSS_CONSTS.PRIMARY_COLOR,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 20
	},
	passwordInput: {
		flex: 1,
		flexDirection: 'row',
		borderColor: CSS_CONSTS.PRIMARY_COLOR,
		borderWidth: 1,
		borderRadius: 5
	},
	input: {
		flex: 1,
		width: '100%',
		fontSize: 24,
		fontFamily: 'Reem-Kufi'
	},
	login: {
		marginTop: '17%',
		width: '50%',
		height: '7%',
		paddingTop: 4,
		borderColor: CSS_CONSTS.PRIMARY_COLOR,
		borderWidth: 1,
		borderRadius: 5
	},
	loginText: {
		fontSize: 28,
		textAlign: 'center',
		color: CSS_CONSTS.PRIMARY_COLOR,
		fontFamily: 'Reem-Kufi'
	},
	signupText: {
		marginTop: 10,
		fontSize: 18,
		textAlign: 'center',
		color: CSS_CONSTS.PRIMARY_COLOR,
		fontFamily: 'Reem-Kufi'
	}
});

export default LoginScreen;
