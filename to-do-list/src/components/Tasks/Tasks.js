import React, {Component} from 'react';
import TaskDetail from './TaskDetail/TaskDetail';
import TaskList from './TaskList';
export default class Tasks extends Component {
    state = {
        tasks: "Tasks"
    };
    componentDidMount(){
        this.props.requestTasks();
    }
    render() {
        return (
            <div>
                <table>
                <tbody>
                    <tr>
                        <td>
                            <TaskList></TaskList>
                        </td>
                        <td>
                            <TaskDetail></TaskDetail>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )   
    };
}