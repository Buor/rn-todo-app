import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button} from "react-native";

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
            //error
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                onChangeText={setValue}
                value={value}
                placeholder={'Введите задачу'}
                style={styles.input}
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
        borderBottomColor: "#3949ab"
    }
})