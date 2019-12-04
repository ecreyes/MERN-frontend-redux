import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import myApp from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(myApp, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;