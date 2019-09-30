import React,{useState} from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'
import { NavigationEvents } from 'react-navigation';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
        <Text> Enter your name</Text>    
            <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            onChangeText = {(newValue) => setName(newValue)}
            />
       
        <Text> My name is {name}</Text>
        { name.length < 5 ? <Text> Please enter a name longer than 5 characters.</Text> : null }
        </View>

    );

};

const styles = StyleSheet.create({
    input: {
        margin:15,
        borderColor: 'black',
        borderWidth: 1
    }

});

export default TextScreen;