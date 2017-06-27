import { NODE_CREATE } from './nodeActions';

import { v4 as guid } from 'uuid';

export function createNode(label) {
    return {
        type: NODE_CREATE,
        data: {
            id: guid(),
            label: label
        }
    }
}