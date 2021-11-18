import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native';
import { CSS_CONSTS, WIDTH, HEIGHT } from '../constants';

import { useFonts, ReemKufi_400Regular } from '@expo-google-fonts/reem-kufi';
import AppLoading from 'expo-app-loading';

const HomeScreen = (props: any) => {
	let [ fonts ] = useFonts({ ReemKufi_400Regular });

	if (!fonts) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.homeScreen}>
				<Text style={styles.title}>logme</Text>
                <View style={styles.authContent}>
                    <TouchableOpacity style={styles.login}>
                        <Text style={styles.login} onPress={() => props.navigation.navigate('Login')}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.register}>
                        <Text style={styles.register} onPress={() => props.navigation.navigate('Register')}>Register</Text>
                    </TouchableOpacity>
                </View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	homeScreen: {
		height: HEIGHT,
		width: WIDTH,
        flex: 1,
        alignItems: 'center'
	},
	title: {
		color: CSS_CONSTS.PRIMARY_COLOR,
		fontSize: 48,
        marginTop: '80%',
		fontFamily: 'ReemKufi_400Regular'
	},
    authContent: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250
    },
    login:{
        flex: 1,
        width: 125,
        height: 50,
        fontSize: 28,
        textAlign: 'center',
        color: CSS_CONSTS.PRIMARY_COLOR,
		fontFamily: 'ReemKufi_400Regular'
    },
    register:{
        flex: 1,
        width: 125,
        height: 50,
        fontSize: 28,
        textAlign: 'center',
        color: CSS_CONSTS.PRIMARY_COLOR,
		fontFamily: 'ReemKufi_400Regular'
    }
});

export default HomeScreen;
