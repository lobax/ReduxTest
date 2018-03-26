
import * as types from '../actions/types'; 
import createReducer from '../createReducer';

const emptyEntry = {completed: false}; 

export const todoList = createReducer(
    [
        {  
            completed: false,
            element: 'First'
        }, 
        {  
            completed: true,
            element: 'Second'
        }, 
    ], { 
    [types.ADD_TODO_ELEMENT](state, action){ 
        const newElement = Object.assign({}, emptyEntry, {element: action.payload}); 
        return state.concat(newElement); 
    }, 
    [types.DELETE_TODO_ELEMENT](state, action){ 
        return state.filter( (item, index) => index !== action.index);
    },
    [types.TOGGLE_TODO_ELEMENT_COMPLETE](state, action){ 
        return state.map( 
            (item, index) => { 
                if (index == action.index) { 
                    return Object.assign({}, item, {completed: !item.completed}); 
                }

                else { return item; }
            }
        ); 
    },

}); 

