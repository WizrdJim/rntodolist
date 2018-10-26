import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Title from './components/title/title';
import ToDo from './components/todo/todo';


export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Title />
        <ToDo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
