import React from 'react'
import { View, Text } from 'react-native'
import { NativeBaseProvider, Box } from 'native-base'

const HomeScreen = () => {
    return (
        <NativeBaseProvider>
            <Box>Hello world</Box>
        </NativeBaseProvider>
    )
}

export default HomeScreen
