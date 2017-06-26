import React from 'react';

import vis from 'vis';
import './network.css';

const nodeStyle = {
    font: '16px Lato black',
    shape: 'box'
};

const edgeStyle = {
    arrows: 'to'
};

const networkOptions = {
    autoResize: true,
    height: '100%',
    width: '100%'
};

class Network extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nodes: new vis.DataSet([
                {id: 1, label: 'Node 1', ...nodeStyle},
                {id: 2, label: 'Node 2', ...nodeStyle},
                {id: 3, label: 'Node 3', ...nodeStyle},
                {id: 4, label: 'Node 4', ...nodeStyle},
                {id: 5, label: 'Node 5', ...nodeStyle}
            ]),
            edges: new vis.DataSet([
                {from: 1, to: 3, ...edgeStyle},
                {from: 1, to: 2, ...edgeStyle},
                {from: 2, to: 4, ...edgeStyle},
                {from: 2, to: 5, ...edgeStyle},
                {from: 3, to: 3, ...edgeStyle}
            ])
        };
    }

    componentDidMount() {
        // Can only get this element once the component mounts.
        const container = document.getElementById('myNetwork');

        const data = {
            nodes: this.state.nodes,
            edges: this.state.edges
        };

        this.network = new vis.Network(container, data, networkOptions);
        this.network.on('click', (e) => {
            console.log(e);
        });
    }

    render() {
        return <div id="myNetwork"/>
    }
}

export default Network;