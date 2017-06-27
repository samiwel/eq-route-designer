import React from 'react';
import Graph from 'react-graph-vis';

import './network.css';

import { map, merge } from 'lodash';

const nodeStyle = {
    font: '16px Lato black',
    shape: 'box'
};

const edgeStyle = {
    arrows: 'to'
};

class Network extends React.Component {

    render() {

        const graph = {
            nodes: map(this.props.nodes, n => merge(n, nodeStyle)),
            edges: map(this.props.edges, e => merge(e, edgeStyle))
        };

        const options = {
            autoResize: true
        };

        const style = {
            height: '100%',
            width: '100%'
        };

        const events = {
            select: function(event) {
                console.log(event);
            }
        };

        return <Graph graph={graph} options={options} style={style} events={events} />
    }
}

export default Network;