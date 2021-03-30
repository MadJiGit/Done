import React, { useState } from 'react';
import { StyleSheet,
         View, 
         FlatList, 
         Alert, 
         TouchableWithoutFeedback, 
         Keyboard } from 'react-native';
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
        if(text.length > 3){
            setTodos((prevTodods) => {
                return [
                    { text: text, key: Math.random.toString() },
                    ...prevTodods
                ]; 
            });
        } else {
            Alert.alert('ERROR!', '\'' + text + '\'\n must be min 3 chars long!', [
                {text: 'OK', onPress: () => console.log('alert closed')}
            ])
        }

        
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
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
        </TouchableWithoutFeedback>
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
 