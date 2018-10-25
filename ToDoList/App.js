import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import Title from './components/title/title';

export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Title />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
