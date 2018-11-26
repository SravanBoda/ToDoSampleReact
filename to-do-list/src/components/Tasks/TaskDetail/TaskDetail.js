import React, {Component} from 'react';
import { Table, Row, Col } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

class TaskDetail extends Component {
    state ={
        taskId: 0,
        taskName: "Add Task",
        taskDescription: ""
    };
    componentDidMount(){
    }
    componentDidUpdate(){
        this.setState({
            taskId: this.props.taskId, 
            taskName: this.props.taskName,
            taskDescription: this.props.taskDescription
        });
    }
    render(){
        return (
            <div style={{padding:"10px"}}>
                <table>
                    <tbody>
                    <tr>
                        <td style={{float:"left"}} colSpan="2">
                            <label>Task Name: {this.state.taskInfo}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea defaultValue={this.state.taskDescription}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td style={{float:"left"}}>
                            <button>Save</button>
                        </td>
                        <td style={{float:"left"}}>
                            <button>Cancel</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskDetail;