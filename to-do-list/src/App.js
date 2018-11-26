import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history'

class App extends Component {
  render() {
    return (  
      <Router history={createBrowserHistory()}>
        <AppLayout/> 
      </Router>    
           
    );
  }
}

export default App;
