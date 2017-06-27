import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Network from "./components/network";
import './App.css';


class App extends Component {

  render() {
    return (
        <div className="page">
        <div className="wrapper">
            <Network />
            <Sidebar />
        </div>
        </div>
    );
  }
}

export default App;
