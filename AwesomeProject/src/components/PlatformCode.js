import React from 'react';
import { View, Platform, StyleSheet, Text } from 'react-native';

export default props => {
    return (
        <View style={[styles.container, {backgroundColor: 'black'}]}>
            <Text style={{ color: 'white' }}>Oi</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
        width: '100%',
        backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
    },
});
