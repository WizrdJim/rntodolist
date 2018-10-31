import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
// import GenerateForm from 'react-native-form-builder';



import Title from './components/title/title';
import ToDo from './components/todo/todo';
import AddToDo from './components/form/form';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.forcingUpdate = this.forcingUpdate.bind(this);

    this.state = {
      todos: ['Do Laundry', 'Wash Dishes']
    }
  }

  addItem(newToDo) {
    console.log('adding... ', newToDo);

    this.setState({
      todos: [newToDo, ...this.state.todos]
    }, () => {
      console.log('Updated todos: ', this.state.todos)
      this.forcingUpdate();
    })
  }

  forcingUpdate() {
    this.forceUpdate();
  }

  // UNSAFE_componentWillUpdate(){

  // }

  // shouldComponentUpdate(){
  //   return true;
  // }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Title />
          <AddToDo addItem={this.addItem} />
          <ToDo todos={this.state.todos} />
        </View>
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
