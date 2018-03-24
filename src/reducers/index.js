import { combineReducers } from 'redux';
import * as todoReducer from './todo';  

export default combineReducers(Object.assign(
    {},
    todoReducer,
)); 
