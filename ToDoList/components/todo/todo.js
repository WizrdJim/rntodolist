import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ToDo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}>
                    To Do Component
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9E9EA5',
        marginTop: 50,
        marginRight: 10,
        marginLeft: 10,
        height:500,
        borderRadius: 15
    },
    containerText: {
        color: 'white',
        fontSize: 20,
        marginTop: 0,
        textAlign: 'center'
        
    }
})

