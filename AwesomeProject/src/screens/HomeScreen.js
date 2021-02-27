import React from 'react';
import { Button } from 'react-native';

usuario = {
    usuario: 'alexandra',
    senha: '12345'
}

export default ({ navigation }) => {
    return (
        <Button 
            title="Go to Jane's profile"
            onPress={() => {
                navigation.navigate('Profile', { name: 'Jane' });
            }}
        />
    );
};