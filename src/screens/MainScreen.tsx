import React from 'react'
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {ITodo} from "../types/todoTypes";

interface IProps {
    addTodo: Function
    removeTodo: Function
    openTodo: Function
    todos: ITodo[]
}

export const MainScreen: React.FC<IProps> = ({addTodo, removeTodo, todos, openTodo}) => {

    let content = (
        <FlatList
            style={styles.todosList} data={todos}
            renderItem={({item}) => <Todo onOpen={openTodo}
            todo={item}
            onRemove={removeTodo}/>}
        />
    )

    if(!todos.length) {
        content = <View style={styles.imageWrap}>
            <Image style={styles.image} source={require('../../assets/icons/noImage.png')}/>
            <Text style={styles.text}>Задачи отсутствуют!</Text>
        </View>
    }

    return (
        <>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </>
    )
}

const styles = StyleSheet.create({
    todosList: {
        marginBottom: 60
    },
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 100
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    text: {
        marginTop: 10
    }
})