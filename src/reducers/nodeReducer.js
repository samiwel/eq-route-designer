import initialState from  '../initialState';
import { NODE_CREATE } from '../actions/nodeActions';

import { map, clone } from 'lodash';

export default (state, action) => {
    const newState = map(state, clone);

    switch(action.type){
        case NODE_CREATE:
            newState.push({
                node: 1
            });
            return newState;

        default: return state || initialState().nodes;
    }
};