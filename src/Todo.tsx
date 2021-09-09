import React from 'react'
import {Text, View, StyleSheet} from "react-native"
import {ITodo} from "./types/todoTypes";

interface IProps {
    todo: ITodo
}

export const Todo: React.FC<IProps> = ({todo}) => {
    return (
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})