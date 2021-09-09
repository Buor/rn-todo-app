import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
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

    return (
        <View>
            <Navbar title={"Todo"}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>

                <View>
                    {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
                </View>
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
