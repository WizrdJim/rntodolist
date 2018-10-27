import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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
    }

    addToDo() {
        const formValues = this.formGenerator.getValues();
        console.log('FORM VALUES: ', formValues);
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
                    <Button rounded style={styles.button}onPress={() => this.addToDo()}>
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
    button:{
        marginLeft: 20,
        backgroundColor: '#374461'
    }
})

