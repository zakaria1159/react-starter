import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>Menu</Text>
    <Button 
      title="Go to Components Demo"
      onPress={() => navigation.navigate('Components')}
    />
    <Button 
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
    />
     <Button 
      title="Go to Image Screen"
      onPress={() => navigation.navigate('Image')}
    />
       <Button 
      title="Go to Counter"
      onPress={() => navigation.navigate('Counter')}
    />
     <Button 
      title="Go to Colors"
      onPress={() => navigation.navigate('Colors')}
    />
     <Button 
      title="Go to Square "
      onPress={() => navigation.navigate('Square')}
    />
    <Button 
      title="Go to Text Screen "
      onPress={() => navigation.navigate('Text')}
    />
    <Button 
      title="Go to Box Screen "
      onPress={() => navigation.navigate('Box')}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
   
    textAlign: "center"
  },
});

export default HomeScreen;
