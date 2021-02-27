import React, { Component, useState } from 'react';
import { Button, Image, Text } from 'react-native';

class CatClass extends Component {
    state = { isHungry: true };

    render() {    
        return(
            <>
                <Image
                    accessibilityLabel='Imagem de um gato'
                    source={this.props.image}
                    style={{ width: 200, height: 200 }}
                />
                <Text>Hello, I am {this.props.nome}</Text>
                <Text>I am {this.state.isHungry ? 'hungry' : 'full'}</Text>
                <Button 
                    onPress={() => {
                        this.setState({ isHungry: false });
                    }}
                    title={this.state.isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
                    disabled={!this.state.isHungry}                
                />
            </>
        );
    }
}

const Cat = props => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <>
            <Image
                accessibilityLabel='Imagem de um gato'
                source={props.image}
                style={{ width: 200, height: 200 }}
            />        
            <Text>Hello, I am {props.nome}</Text>
            <Text>I am {isHungry ? 'hungry' : 'full'}</Text>
            <Button 
                onPress={() => {
                    setIsHungry(false);
                }}
                title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
                disabled={!isHungry}                
            />
        </>
    );
}

export default CatClass;