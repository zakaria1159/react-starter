import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
  <View>
  
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
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
