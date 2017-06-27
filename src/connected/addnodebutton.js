import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/button';
import { createNode } from '../actions/actionCreators';

const AddNodeButton = (props) => (
    <Button onClick={props.onClick}>Add Node</Button>
);

const mapDispatchToProps = function(dispatch){
    return {
        onClick: () => dispatch(createNode('New node'))
    }
};

export default connect(null, mapDispatchToProps)(AddNodeButton);