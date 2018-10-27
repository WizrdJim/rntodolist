import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Title from '../title/title';
import ToDo from '../todo/todo';
import AddToDo from '../form/form';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <AddToDo/>
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
