import React from 'react'
import {FlatList, StyleSheet} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {ITodo} from "../types/todoTypes";

interface IProps {
    addTodo: Function
    removeTodo: Function
    todos: ITodo[]
}

export const MainScreen: React.FC<IProps> = ({addTodo, removeTodo, todos}) => {
    return(
        <>
            <AddTodo onSubmit={addTodo}/>
            <FlatList style={styles.todosList} data={todos}
                      renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}/>}/>
        </>
    )
}

const styles = StyleSheet.create({
    todosList: {
        marginBottom: 60
    }
})