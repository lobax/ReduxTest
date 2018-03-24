import React from 'react'; 
import PropTypes from 'prop-types'; 
import Todo from './Todo'; 
import { TextInput, Button, View } from 'react-native';
import { connect } from 'react-redux'; 

export default class ItemAdder extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    
    render() { 
        return ( 
            <View> 
                <TextInput
                    style={{width: 100}}
                    placeholder="TODO"
                    onChangeText={(text) => this.setState({text})}
                />
                <Button
                    onPress = {this.props.onPress}
                    title = "Add"
                />
                
            </View> 
        );
    } 
}



