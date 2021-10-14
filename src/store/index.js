import { createStore } from 'redux';
import reducers from './reducers'; // combined reducers

const store = createStore(reducers);
console.log(store);
export default store;