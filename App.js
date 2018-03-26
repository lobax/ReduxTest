import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import TodoList from './src/components/TodoList'; 
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, compose } from 'redux';
import store from './src/store'; 

export default class App extends React.Component {
  render() {
    return (

        <Provider store={store}>
            <TodoList />
        </Provider>
    );
  }
}


