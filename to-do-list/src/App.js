import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppLayout from '../src/components/AppLayout';
import AppNavigator from '../src/AppNavigator';

class App extends Component {
  render() {
    return (
      <AppNavigator>
        <AppLayout/>
      </AppNavigator>
    );
  }
}

export default App;
