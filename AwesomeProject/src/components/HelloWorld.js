import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';

class HelloWorldComponent extends Component {
    render() {
        return (
            <Text style={styles.text}>
                Hello World! 🎉
            </Text>
        );
    }
}

const HelloWorld = () => {
    return (
        <Text style={styles.text}>
            Hello World! 🎉
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'red',
    },
});

export default HelloWorld;