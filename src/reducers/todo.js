
import * as types from '../actions/types'; 
import createReducer from '../createReducer'; 

export const todoList = createReducer(['Default'], { 
    [types.ADD_TODO_ITEM](state, action){ 
        return state.concat(action.entry); 
    } 
}); 

