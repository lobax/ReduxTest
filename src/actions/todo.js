import * as types from './types'; 

export function addTodoEntry(entry) { 
    return { 
        type: types.ADD_TODO_ELEMENT, 
        payload: entry
    }
}

export function deleteTodoEntry(index) { 
    return { 
        type: types.DELETE_TODO_ELEMENT, 
        index: index
    }
}

export function toggleTodoEntry(index) { 
    return { 
        type: types.TOGGLE_TODO_ELEMENT_COMPLETE,
        index: index
    }
}
