import React from 'react'; 
import PropTypes from 'prop-types'; 
import Todo from './Todo'; 
import ItemAdder from './ItemAdder'; 
import { StyleSheet, Text, View, Alert } from 'react-native';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import { addTodoEntry, deleteTodoEntry, toggleTodoEntry } from '../actions/todo'


class TodoList extends React.Component { 
     constructor(props){
         super(props);
         console.log(this.props)     
     }
    render() { 
        return ( 
            <View style={styles.container}> 
                <View style={styles.list}> 
                    {this.props.todos.map((todo, index) => (
                        <View style={styles.item} > 
                            <Todo 
                                index={index} 
                                text={todo.element} 
                                completed={todo.completed} 
                                onLongPress = {(i) => { 
                                    this.props.dispatch(deleteTodoEntry(i))
                                }}
                                onPress = {(i) => { 
                                    this.props.dispatch(toggleTodoEntry(i))
                                }}
                            /> 
                        </View> 
                    ))}
                    <ItemAdder 
                        onPress = {(text) => {
                            this.props.dispatch(addTodoEntry(text)); 
                        }} 
                    /> 
                </View>
            </View>
        );
    }
}



export default connect( 
    (state) => { return { todos: state.todoList }}
)(TodoList); 
            

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        padding: 50,
    },
    item: { 
        backgroundColor: 'azure',
        width: 200,
        margin: 5, 
        padding: 10,

    },

});

