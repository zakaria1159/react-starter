import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter =({color, onIncrease, onDecrease}) =>{

return (
<View>
    <Text> {color} </Text>
    <Button onPress={() => onIncrease()} title={`increase ${color}`} />
    <Button onPress={() => onDecrease()} title={`decrease ${color}`} />
</View>
);
};

const styles = StyleSheet.create({});

export default ColorCounter;