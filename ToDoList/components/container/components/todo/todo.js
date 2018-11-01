import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deleteButtonColor: 'red',
            editButtonColor: 'white'
        }
    }


    showToDoList(todos) {
        return (
            todos.map((e, i) => {
                return (
                    <View key={i} style={styles.toDosContainer}>

                        <View style={styles.todoContainer}>
                            <Text style={styles.todosText}>
                                {e}
                            </Text>
                        </View>

                        <View style={styles.deleteContainer}>
                            <Button
                                onPress={() => this.props.deleteOneTodo(i)}
                                title="X"
                                style={styles.deleteButton}
                                color={this.state.deleteButtonColor}
                            />
                        </View>

                        <View style={styles.editContainer}>
                            <Button
                                onPress={() => this.props.editToDo(e, i)}
                                title="Edit"
                                style={styles.editButton}
                                color={this.state.editButtonColor}
                            />
                        </View>
                    </View>
                )
            })
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View>
                        <Text style={styles.toDoHeader}>
                            My To Do List
                    </Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        {this.showToDoList(this.props.todos)}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#374461',
        marginTop: 50,
        marginRight: 10,
        marginLeft: 10,
        height: 500,
        borderRadius: 15,
    },
    toDoHeader: {
        color: 'white',
        fontSize: 20,
        marginTop: 0,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    todosText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    todoContainer: {
        width: 100,
        height: 50,
        // backgroundColor: 'blue',
        marginTop: 15,
        justifyContent: 'center',

    },
    deleteContainer: {
        marginLeft: 10,
        borderColor: 'red',
        borderWidth: 0.2,
        width: 35,
        height: 35,
        borderRadius: 10,
        marginTop: 22
    },
    toDosContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    editContainer: {
        marginLeft: 10,
        borderColor: 'white',
        borderWidth: 0.2,
        width: 55,
        height: 35,
        borderRadius: 10,
        marginTop: 22,
    }
})

