import React from 'react'
import { View, Text } from 'react-native'

const ErrorMesssageModal = (props: any) => {
    return (
        <View>
            <Text>{props.message}</Text>
        </View>
    )
}

export default ErrorMesssageModal
