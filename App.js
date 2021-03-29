import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {
    const [todos, setTodos] = useState([
        { text: 'bys mth', key: '1' },
        { text: 'aaaaaaaa', key: '2' },
        { text: 'swjhgfehqifh', key: '3' },
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodods) => {
            return prevTodods.filter(todo => todo.key != key);
        })
    }

    const submitHandler = (text) => {
        setTodos((prevTodods) => {
            return [
                { text: text, key: '5' },
                ...prevTodods
            ]; 
        })
    }

    return (
        <View style={styles.container}>
            <Header /> 
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={({ item }) => (
                            <TodoItem item={item} pressHandler={pressHandler} />
                        )}
                    />
                </View>
            </View> 
        </View>
    );
} 

const styles = StyleSheet.create({   
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
});
 