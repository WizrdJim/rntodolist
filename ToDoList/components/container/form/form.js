import React, { Component } from 'react';
import { StyleSheet, TextInput, keyboardType } from 'react-native';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';



export default class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.addNewToDo = this.addNewToDo.bind(this);

        this.state = {
            todo: ''
        }
    }

    addNewToDo() {
        this.props.addItem(this.state.todo);

        this.setState({
            todo: ''
        })
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="  Add to do"
                        onChangeText={(todo) => this.setState({ todo })}
                    />
                </View>

                <View>
                    <Button rounded style={styles.button} onPress={this.addNewToDo}>
                        <Text>Add</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerText: {
        color: 'black',
        textAlign: 'center',
        marginTop: 20
    },
    button: {
        marginLeft: 20,
        backgroundColor: '#374461'
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 0.2,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10
    }
})

