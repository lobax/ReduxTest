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
            <View style={styles.container}>
                <TodoList />
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

