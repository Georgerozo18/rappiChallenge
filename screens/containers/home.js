import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends Component<Props>{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>El Baraton</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    color: 'purple',
  }
})
export default HomeScreen;
