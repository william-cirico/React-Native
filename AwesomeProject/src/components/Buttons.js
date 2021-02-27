import React, { useState } from 'react';
import { 
    TouchableOpacity, 
    TouchableHighlight, 
    TouchableNativeFeedback, 
    TouchableWithoutFeedback,
    Text, 
    StyleSheet,
    View,
} from 'react-native';

const ButtonOpacity = () => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => {}}
        >
            <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>
    );
}

const ButtonHighlight = () => {

    return (
        <TouchableHighlight
            style={styles.button}
            activeOpacity={0.9}
            underlayColor='black'
            onPress={() => {}}
        >
            <Text style={styles.buttonText}>TouchableHighlight</Text>
        </TouchableHighlight>
    );
}

const ButtonNativeFeedback = () => {
    const [rippleColor, setRippleColor] = useState('#aaa');
    const [rippleOverflow, setRippleOverflow] = useState(false);
    return (
        <TouchableNativeFeedback
            onPress={() => {
                setRippleColor('#bbb');
                setRippleOverflow(!rippleOverflow);
            }}
            background={TouchableNativeFeedback.Ripple('#ccc', rippleOverflow)}
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

const ButtonWithoutFeedback = () => {
    const [colorButton, setColorButton] = useState('#ccc')
    return (
        <TouchableWithoutFeedback            
            onLongPress={() => {
                setColorButton(colorButton=='blue' ? 'black': 'blue')
            }}
        >
            <View style={[styles.button, {backgroundColor: colorButton}]}>
                <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
        margin: 10,        
    },
    buttonText: {
        color: 'white',
    },
})

export { ButtonHighlight, ButtonOpacity, ButtonNativeFeedback, ButtonWithoutFeedback };