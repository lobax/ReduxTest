import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

class Todo extends React.Component { 
    
    delete() { 
        this.props.onLongPress(this.props.index); 
    }

    toggleComplete() { 
        this.props.onPress(this.props.index); 
    }

    render() { 
        return ( 
            <View>
                <TouchableOpacity 
                    delayLongPress = {500}
                    onPress={() => {
                        this.toggleComplete(); 
                    }}
                    onLongPress={() => {
                        this.delete(); 
                    }}
                > 
                    <Text style={this.props.completed ? style.completedText: style.todoText } >
                        {this.props.text}
                    </Text>
                </TouchableOpacity> 
            </View>
        ); 
    }
} 

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired, 
    onLongPress: PropTypes.func,
    onPress: PropTypes.func,
};

const style = { 
    completedText: {
        textDecorationLine: 'line-through',
        color: 'grey',
    }, 
    todoText: { 
        textDecorationLine: 'none',
    },
}

export default Todo; 
