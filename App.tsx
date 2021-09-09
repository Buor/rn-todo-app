import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";

const App: React.FC = () => {
    return (
        <View>
            <Navbar title={"Todo"}/>
            <View style={styles.container}>
                <AddTodo/>
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
