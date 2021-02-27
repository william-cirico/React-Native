import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default props => {
    return (
        <>
            <View style={styles.v1}>
                <View style={[styles.quadrado, {backgroundColor: 'black'}]}></View>
                <View style={[styles.quadrado, {backgroundColor: 'lime'}]}></View>
                <View style={[styles.quadrado, {backgroundColor: '#A8CBD3'}]}></View>
                <Icon 
                    name='alarm'
                    size={100}
                    color='blue'
                />        
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    v1: {
        flexGrow: 1,
        width: '100%',                   
        justifyContent: 'center',                        
    },
    quadrado: {
        height: 70,
        width: 70,
        borderBottomLeftRadius: 35,
        borderTopRightRadius: 35,
        borderColor: 'red',
        borderWidth: 1,        
    }
});