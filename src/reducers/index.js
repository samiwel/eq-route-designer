import { combineReducers } from 'redux';
import nodeReducer from './nodeReducer';

export default combineReducers({
    nodes: nodeReducer
});

