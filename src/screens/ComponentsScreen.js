import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Zakaria';
    return (<View>
        <Text style={styles.textStyle}> this is the component screen </Text>
        <Text style ={styles.subeaderStyle}> Hi There  {greeting}</Text>
    </View>);

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subeaderStyle: {
        fontSize: 40
    }
});

export default ComponentsScreen;