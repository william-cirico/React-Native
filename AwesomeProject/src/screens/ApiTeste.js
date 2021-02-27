import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default props => {
    const [texto, setTexto] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.0.2.2:8000');
                const json = await response.json();
                setTexto(json.message)
            } catch(e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>{texto} - API</Text>
        </View>
    );
}