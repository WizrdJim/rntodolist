import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}>
                    To Do List
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#374461',
        height: 115
    },
    containerText: {
        color: 'white',
        fontSize: 40
    }
})