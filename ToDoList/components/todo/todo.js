import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.todos
        }

        // console.log('todos: ', this.props.todos)
    }

    showToDoList() {
        return (
            this.state.todos.map((e, i) => {
                return (
                    <Text key={i} style={styles.todos}>
                        {e}
                    </Text>
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
                        <Text style={styles.containerText}>
                            My To Do List
                    </Text>
                    </View>


                    <View style={{marginTop: 15}}>
                        {this.showToDoList()}
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
        borderRadius: 15
    },
    containerText: {
        color: 'white',
        fontSize: 20,
        marginTop: 0,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    // containerText: {
    //     position: 'relative',
    //     top: 10
    // },
    todos: {
        color: 'white',
        textAlign: 'center',
    }
})

