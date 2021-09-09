import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";
import {THEME} from "../theme";

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
            <Button onPress={pressHandler} title={"Добавить"}/>
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