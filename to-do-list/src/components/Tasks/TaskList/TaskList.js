import React, {Component} from 'react';
import { Table } from 'antd';
import TaskDetail from '../TaskDetail/TaskDetail';

const columns = [{
    title : 'Task Name',
    dataIndex:'beatName'
},
{
    title : 'Task Description',
    dataIndex:'beatDescription'
}];
const tasks = [{
    beatId: 1,
    beatName: 'Task 1',
    beatDescription: 'Break fast is ready',
  },
  {
    beatId: 2,
    beatName: 'Task 2',
    beatDescription: 'Lunch is not available'
  },
  {
    beatId: 3,
    beatName: 'Task 3',
    beatDescription: 'Snacks are just started'
},
{
    beatId: 4,
    beatName: 'Task 4',
    beatDescription: 'Dinner is on the way'
}]; 
export default class TaskList extends Component {
    constructor(props){
        super(props);
    }
    state = {
        taskList: tasks
    }
    componentDidMount(){
        console.log(this.state.taskList);
    }
    showTask = (task) => {
       <TaskDetail taskId={task.taskId}></TaskDetail>
    };
    render(){
        return (
            <div>
                <Table dataSource ={this.state.taskList} columns={columns} onRowClick = {task => this.showTask(task)}>
                </Table>
            </div>
        )
    };
}