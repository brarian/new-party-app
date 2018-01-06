import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components//navigation-bar';
import {
  BrowserRouter as Router} from 'react-router-dom';
import ReactContainer from './route-container';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavigationBar />
        <ReactContainer />
        </div>
      </Router>
    );
  }
}

export default App;
