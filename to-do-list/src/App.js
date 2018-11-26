import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskDetail from './components/Tasks/TaskDetail/TaskDetail';
import Tasks from './components/Tasks/Tasks';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Tasks></Tasks>
        {/*
        <TaskDetail></TaskDetail>
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
