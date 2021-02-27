import React, { useState } from 'react';
import { 
    Alert,
    Button,
    FlatList, 
    View, 
    Text, 
    Image, 
    ScrollView, 
    Switch,
    StyleSheet, 
    TextInput 
} from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Text>Some text</Text>
            <View>
                <Text>Some more text</Text>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200 }}
                />
                <Button
                    title="Press me"
                    color='#841584'
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />        
            </View>
            <TextInput 
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                // defaultValue='You can type in me'
                placeholder='You can type in me'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});

export default App;