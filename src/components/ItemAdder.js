import React from 'react'; 
import PropTypes from 'prop-types'; 
import Todo from './Todo'; 
import { TextInput, Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'; 

export default class ItemAdder extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    
    render() { 
        return ( 
            <View style={styles.container}> 
                <TextInput style={styles.input}
                    placeholder="TODO"
                    onChangeText={(text) => this.setState({text})}
                />
                <Button 
                    onPress = {() => {this.props.onPress(this.state.text)}}
                    title = "Add"
                />
            </View> 
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: { 
        width: 100,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 5, 
    },
});



