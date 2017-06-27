import { applyMiddleware, createStore } from 'redux';
import initialState from './initialState';
import rootReducer from './reducers';
import thunk from 'redux-thunk'; // allows us to use asynchronous actions
import { devToolsEnhancer } from 'redux-devtools-extension';

export default applyMiddleware(thunk)(createStore)(rootReducer, initialState(), devToolsEnhancer());