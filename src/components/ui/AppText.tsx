import React from 'react'
import {Text, StyleSheet} from 'react-native'

interface IProps {
    style?: object
}

export const AppText: React.FC<IProps> = ({style, children}) => {
    return (
        <Text style={{...styles.default, ...style}}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }
})