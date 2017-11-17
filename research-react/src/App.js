import React, { Component } from 'react';
import Routes from './Routes';
import RouteNavItem from "./components/RouteNavItem";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
      </div>
      
    );
  }
}

export default App;
