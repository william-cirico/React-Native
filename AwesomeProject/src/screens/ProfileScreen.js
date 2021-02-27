import React from 'react';
import { Button, Text } from 'react-native';

export default ({ navigation, route }) => {
    return (
        <>
            <Text>This is {route.params && route.params.name}'s profile {route.params.itemId}</Text>
            <Button
                title='Go to profile'
                onPress={() => navigation.push('Profile', {name: 'Teste'})}
            />
            <Button
                title='Voltar'
                onPress={() => navigation.goBack()}                
            />
        </>
    );
}