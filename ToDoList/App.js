import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Title from './components/container/components/title/title';
import ToDo from './components/container/components/todo/todo';
import AddToDo from './components/container/components/form/form';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.updatePreviousToDo = this.updatePreviousToDo.bind(this)

    this.state = {
      todos: ['Do Laundry', 'Wash Dishes'],
      todo: '',
      showEditButton: false,
      index: -1
    }
  }

  addItem(newToDo) {
    this.setState({
      todos: [newToDo, ...this.state.todos],
      todo: ''
    })
  }

  updateToDo(todo) {
    this.setState({ todo })
  }

  updatePreviousToDo() {
    var toDoItems = this.state.todos;

    toDoItems[this.state.index] = this.state.todo;

    this.setState({
      todos: toDoItems,
      todo: '',
      showEditButton: false,
    })
  }

  deleteToDo(index) {
    const todos = this.state.todos;
    var new_todos_list = []

    todos.map((item, i) => {
      if (index !== i) {
        new_todos_list.push(item);
      }
    })

    this.setState({
      todos: new_todos_list
    })
  }

  editToDo(item, index) {
    this.setState({
      showEditButton: true,
      todo: item,
      index: index
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Title />
          <AddToDo updatePreviousToDo={this.updatePreviousToDo} updateToDo={(todo) => this.updateToDo(todo)} addItem={this.addItem} showEditButton={this.state.showEditButton} todo={this.state.todo} />
          {/* {deleteOneTodo={this.deleteToDo}} */}
          <ToDo todos={this.state.todos} editToDo={(item, index) => this.editToDo(item, index)} deleteOneTodo={(i) => this.deleteToDo(i)} />
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
