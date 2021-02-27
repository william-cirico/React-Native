import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default props => {
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
        >
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
            <Text>Teste</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',        
    }
});