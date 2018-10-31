import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Title from './components/title/title';
import ToDo from './components/todo/todo';
import AddToDo from './components/form/form';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.forcingUpdate = this.forcingUpdate.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);

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

  deleteToDo(index) {
    console.log('DELETE BUTTON CLICKED');
    console.log(index)
    const todos = this.state.todos;
    var new_todos_list = []

    todos.map((item, i) => {
      if (index !== i) {
        new_todos_list.push(item);
      }
    })

    this.setState({
      todos: new_todos_list
    }, () => console.log('New todos: ', this.state.todos))
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Title />
          <AddToDo addItem={this.addItem} />
          <ToDo todos={this.state.todos} deleteOneTodo={(i) => this.deleteToDo(i)} />
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
