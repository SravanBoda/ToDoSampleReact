import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history'
import {Provider} from "react-redux";

import configureStore from "./store";
const store = configureStore({});
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={createBrowserHistory()}>
          <AppLayout/> 
        </Router>    
      </Provider>        
    );
  }
}

export default App;
