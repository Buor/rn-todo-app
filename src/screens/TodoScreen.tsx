import React from 'react'
import {Text, View, Button, StyleSheet} from "react-native";
import {ITodo} from "../types/todoTypes";
import {THEME} from "../theme";
import {AppCard} from "../components/ui/Card";

interface IProps {
    goBack: Function,
    todo: ITodo
}

export const TodoScreen: React.FC<IProps> = ({goBack, todo}) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title={'Ред.'} onPress={() => {}}/>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={"Назад"} color={THEME.GRAY_COLOR} onPress={() => goBack()}/>
                </View>
                <View style={styles.button}>
                    <Button title={"Удалить"} color={THEME.DANGER_COLOR} onPress={() => console.log('To remove')}/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    },
    card: {
        padding: 15,
        marginBottom: 20
    }
})

