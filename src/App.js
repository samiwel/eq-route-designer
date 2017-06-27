import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import ConnectedNetwork from "./connected/connectedNetwork";
import './App.css';


class App extends Component {

  render() {
    return (
        <div className="page">
        <div className="wrapper">
            <ConnectedNetwork />
            <Sidebar />
        </div>
        </div>
    );
  }
}

export default App;
