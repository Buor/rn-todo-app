import React, {useState} from 'react'
import {Alert, StyleSheet, TextInput, View} from "react-native"
import {THEME} from "../theme"
import {AntDesign} from '@expo/vector-icons'

interface IProps {
    onSubmit: Function
}

export const AddTodo: React.FC<IProps> = ({onSubmit}) => {

    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Название задачи не может быть пустым!')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                autoCorrect={false}
                onChangeText={setValue}
                value={value}
                placeholder={'Введите задачу'}
                style={styles.input}
                autoCapitalize={'none'}
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo" size={24} color="black">
                Добавить
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 15
    },
    todoItem: {},
    input: {
        padding: 10,
        width: "70%",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})