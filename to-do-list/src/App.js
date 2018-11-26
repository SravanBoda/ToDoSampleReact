import React, { Component } from 'react';
import './App.css';
import TaskDetail from './components/Tasks/TaskDetail/TaskDetail';
import Tasks from './components/Tasks/Tasks';
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
