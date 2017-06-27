import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/button';
import { NODE_CREATE } from '../actions/nodeActions';

const AddNodeButton = (props) => (
    <Button onClick={props.onClick}>Add Node</Button>
);

const mapDispatchToProps = function(dispatch){
    return {
        onClick: () => dispatch({type: NODE_CREATE}) // TODO swap for action creator
    }
};

export default connect(null, mapDispatchToProps)(AddNodeButton);