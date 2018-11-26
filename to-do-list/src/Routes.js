import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import TodoListPage from './pages/TodoListPage';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/todolist" component={TodoListPage}></Route>
            </Switch>
        );
    }
}

export default Routes;