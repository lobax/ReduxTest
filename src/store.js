
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { addTodoEntry} from './actions/todo';  

const store = createStore(reducers);

// Log the initial state
console.log(store.getState())
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


export default store; 
