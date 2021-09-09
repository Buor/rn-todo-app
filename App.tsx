import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {ITodo} from "./src/types/todoTypes";
import {Todo} from "./src/Todo";

const App: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    const addTodo = (title: string) => {
        const newTodo = {
            id: Date.now().toString(),
            title
        }
        setTodos(prev => [...prev, newTodo])
    }

    const removeTodo = (id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <View>
            <Navbar title={"Todo"}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <FlatList style={styles.todosList} data={todos}
                          renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}/>}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    todosList: {
        marginBottom: 60
    }
});

export default App;
