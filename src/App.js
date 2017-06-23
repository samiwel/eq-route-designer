import React, { Component } from 'react';
import vis from 'vis';
import Sidebar from './components/sidebar';
import './App.css';

class App extends Component {

    componentDidMount() {

        let nodeStyle = {
            font: '16px Lato black',
            shape: 'box'
        }

        const nodes = new vis.DataSet([
            {id: 1, label: 'Node 1', ...nodeStyle},
            {id: 2, label: 'Node 2', ...nodeStyle},
            {id: 3, label: 'Node 3', ...nodeStyle},
            {id: 4, label: 'Node 4', ...nodeStyle},
            {id: 5, label: 'Node 5', ...nodeStyle}
        ]);

        const edges = new vis.DataSet([
            {from: 1, to: 3},
            {from: 1, to: 2},
            {from: 2, to: 4},
            {from: 2, to: 5},
            {from: 3, to: 3}
        ]);

        const container = document.getElementById('myNetwork');

        const data = {
            nodes: nodes,
            edges: edges
        };
        const options = {
            autoResize: true,
            height: '100%',
            width: '100%'};

        // initialize your network!
        const network = new vis.Network(container, data, options);
        network.on('click', (e) => {
            console.log(e);
        });
    }


  render() {
    return (
        <div className="page">
        <div className="wrapper">
            <div id="myNetwork"/>
            <Sidebar />
        </div>
        </div>
    );
  }
}

export default App;
