import initialState from  '../initialState';
import { NODE_CREATE } from '../actions/nodeActions';

export default (state, action) => {
    let newstate = Object.assign({},state);
    switch(action.type){
        case NODE_CREATE:
            newstate[action.killer].kills += 1;
            return newstate;
        default: return state || initialState().nodes;
    }
};