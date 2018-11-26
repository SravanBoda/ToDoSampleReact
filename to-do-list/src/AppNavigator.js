import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import Home from '../src/components/Home/Home';
import TodoListPage from '../src/pages/TodoListPage';

class AppNavigator extends Component {
    render() {
        return (
            <Router>
                
                <Route path="/" Component={Home}></Route>
                <Route path="/todolist" Component={TodoListPage}></Route>

            </Router>
        );
    }
}

export default AppNavigator;