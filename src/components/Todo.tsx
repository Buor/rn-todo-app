import React from 'react'
import {StyleSheet, TouchableOpacity, View} from "react-native"
import {ITodo} from "../types/todoTypes"
import {AppText} from "./ui/AppText"

interface IProps {
    todo: ITodo,
    onRemove: Function,
    onOpen: Function
}

export const Todo: React.FC<IProps> = ({todo, onRemove, onOpen}) => {
    return (
        <TouchableOpacity
            onLongPress={() => onRemove(todo.id)}
            onPress={() => onOpen(todo.id)}
        >
            <View style={styles.todo}>
                <AppText style={styles.title}>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
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
    },
    title: {
        fontFamily: 'roboto-bold'
    }
})