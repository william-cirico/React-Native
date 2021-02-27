import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import HelloWorld from '../components/HelloWorld';
import Cat from '../components/Cat';
import PizzaTranslator from '../components/PizzaTranslator';
import { 
    ButtonHighlight, 
    ButtonOpacity, 
    ButtonNativeFeedback,
    ButtonWithoutFeedback, 
} from '../components/Buttons';
import PaginScrollView from '../components/PagingScrollView';
import { FlatListBasic, SectionListBasics } from '../components/FlatListComponent';
import PlatformCode from '../components/PlatformCode';
import Design from '../components/Design';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { RootStackScreen } from './Modal';
import TabNavigation from './TabNavigation';
import DrawerNavigation from './DrawerNavigation';


// const Stack = createStackNavigator();

const App = () => {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName='Home'>            
        //         <HelloWorld />
        //         <Cat nome='Miau' image={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}/>
        //         <Cat nome='Mimi' image={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}/>
        //         <PizzaTranslator />
        //         <ButtonHighlight />
        //         <ButtonOpacity />
        //         <ButtonNativeFeedback />
        //         <ButtonWithoutFeedback />
        //         <PaginScrollView />
        //         <SectionListBasics />
        //         <PlatformCode />
        //         <Design />
        //         <Stack.Screen 
        //             name='Home'
        //             component={HomeScreen}
        //             options={{ title: 'Welcome', headerShown: false }}                
                    
        //         />
        //         <Stack.Screen 
        //             name="Profile"
        //             initialParams={{ itemId: 42 }}  
        //             options={{ headerShown: false }}                  
        //         >
        //             {props => <ProfileScreen {...props} />}
        //         </Stack.Screen>            
        //     </Stack.Navigator>
        //     <RootStackScreen />
        // </NavigationContainer>
        // <TabNavigation />   
        // <DrawerNavigation />    
        <Text>Oi</Text>
    );
};

export default App;