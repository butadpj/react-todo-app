import { createStore } from 'redux';
import reducers from './reducers'; // combined reducers

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store);
export default store;
