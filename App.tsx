import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/Navbar";

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <Navbar title={"Todo App"}>

            </Navbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default App;
