import React from 'react';
import { Button, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

setInterval()
function HomeScreen({ navigation }) {     
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={() => {navigation.toggleDrawer()}}
                style={{ top: 10, left: 10, position: 'absolute' }}
            >
            <Icon 
                name='menu-outline'
                size={30}
                color='black'
                
            />
            </TouchableOpacity>
        <Button
            onPress={() => navigation.navigate('Notifications')}
            title="Go to notifications"
        />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}