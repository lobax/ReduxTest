import React from 'react'; 
import PropTypes from 'prop-types'; 
import Todo from './Todo'; 
import ItemAdder from './ItemAdder'; 
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import ActionCreators from '../actions'


class TodoList extends React.Component { 
     constructor(props){
         super(props);
         console.log(this.props)     
     }
    render() { 
        return ( 
            <View> 
                <ItemAdder 
                    onPress = {(text) => {this.props.addTodoEntry(text)}} 
                /> 
                {this.props.todos.map((todo, index) => (
                    <Todo key={index} text={todo} completed={false} /> 
                ))}
            </View>
        );
    }
}



export default connect( 
    (state) => { return { todos: state.todoList }}, 
    (dispatch) => {return bindActionCreators(ActionCreators, dispatch)}
)(TodoList); 
            


