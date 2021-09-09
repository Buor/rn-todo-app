import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ITodo} from "./src/types/todoTypes";
import {MainScreen} from "./src/screens/MainScreen";
import {Navbar} from "./src/components/Navbar";
import {TodoScreen} from "./src/screens/TodoScreen";

const App: React.FC = () => {

    const [todoId, setTodoId] = useState<string | null>(null)
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

    let content = (
        <MainScreen addTodo={addTodo} removeTodo={removeTodo} todos={todos}/>
    )

    if(todoId !== null)
        content = <TodoScreen/>

    return (
        <View>
            <Navbar title={"Todo"}/>
            <View style={styles.container}>
                { content }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
});

export default App;
