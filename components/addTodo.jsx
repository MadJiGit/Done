import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function AddTodo( { submitHandler } ) {
    const submitButton = (val) => {
        submitHandler(text);
        changeHandler('');    

    }
    
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    
    
    return (
        <View>
            <TextInput 
            style={styles.input}
                placeholder='new todo...'
                // onChangeText={(val) => changeHandler(val)}
                onChangeText={changeHandler}
            />
            <Button onPress={
                () => submitHandler(text)
                // () => submitButton(text)
            } 
                    title='ADD' 
                    background
                    color='coral' 
            />
        </View>

    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },    
})