import React from 'react'
import {View, StyleSheet, TextInput, Button} from "react-native";

interface IProps {

}

export const AddTodo: React.FC<IProps> = () => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button onPress={() => {
            }} title={"Добавить"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
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