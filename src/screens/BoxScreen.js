import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';


const BoxScreen = () => {
return (
    <View style = { styles.viewStyle }>
        <Text style = { styles.textStyle }>
            Child #1
        </Text>
        <Text style = { styles.textStyle }>
            Child #2
        </Text>
        <Text style = { styles.textStyle }>
            Child #3
        </Text>
    </View>

);
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:1,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth:10,
        borderColor: 'red',
        margin: 20
    }
    
});

export default BoxScreen;