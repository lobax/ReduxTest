import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

class Todo extends React.Component { 
    render() { 
        return ( 
            <View>
            <Text style={{ 
                    textDecorationLine: this.props.completed ? 'line-through' : 'none'
            }}>
                {this.props.text}</Text>
            </View>
        ); 
    }
} 

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo; 
