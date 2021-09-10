import React from 'react'
import {Text, StyleSheet} from 'react-native'

interface IProps {
    style?: object
}

export const AppTextBold: React.FC<IProps> = ({style, children}) => {
    return (
        <Text style={{...styles.default, ...style}}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }
})