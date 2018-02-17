import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components//navigation-bar';
import {
  BrowserRouter as Router} from 'react-router-dom';
import ReactContainer from './route-container';
import configureStore from './store';
import { Provider } from 'react-redux';
import Footer from './components/footer';

const initialState = {};

const store = configureStore(initialState);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          <NavigationBar />
          <ReactContainer />
          <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
