import * as types from './types'; 

export default function addTodoEntry(entry) { 
    console.log("Called"); 
    return { 
        type: types.ADD_TODO_ELEMENT, 
        payload: entry
    }
}
