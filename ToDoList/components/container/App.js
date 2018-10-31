import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Title from '../title/title';
import ToDo from '../todo/todo';


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
