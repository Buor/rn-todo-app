import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
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
        const todoToDelete = todos.find(todo => todo.id === id)
        Alert.alert(
            'Удаление элемента',
            `Вы уверены, что хотите удалить "${todoToDelete!.title}"?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    onPress: () => {
                        setTodoId(null)
                        setTodos(prev => prev.filter(todo => todo.id !== id))
                    }
                }
            ],
            {cancelable: false}
        )
    }

    const updateTodo = (id: string, title: string) => {
        setTodos(prev => prev.map(todo => {
            if(todo.id === id) {
                todo.title = title
            }
            return todo
        }))
    }

    let content = (
        <MainScreen
            addTodo={addTodo}
            removeTodo={removeTodo}
            todos={todos}
            openTodo={setTodoId}
        />
    )

    if (todoId !== null) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen onSave={updateTodo} onRemove={removeTodo} todo={selectedTodo!} goBack={() => setTodoId(null)}/>
    }

    return (
        <View>
            <Navbar title={"Todo"}/>
            <View style={styles.container}>
                {content}
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
