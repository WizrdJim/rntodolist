import React, { Component } from 'react';
import { StyleSheet, keyboardType } from 'react-native';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';

const fields = [
    {
        type: 'text',
        name: 'todo',
        required: true,
        label: 'Adding a to do',
    }
];


export default class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.addNewToDo = this.addNewToDo.bind(this);

        this.state = {
            addNew: this.props.addItem
        }
    }

    // state = {
    //     addNew: props.addItem
    // }

    addNewToDo() {
        const formValues = this.formGenerator.getValues();
        console.log('FORM VALUES: ', formValues);
        // console.log('props: ', props)
        this.state.addNew(formValues.todo);
    }

    render() {
        return (
            <View>
                <View>
                    <GenerateForm
                        ref={(c) => {
                            this.formGenerator = c;
                        }}
                        fields={fields}
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
    }
})

