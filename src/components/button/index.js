import React from 'react';

export default (props) => (
    <button className="btn" {...props}>{props.children}</button>
);