import React, {Component} from 'react';

class TaskDetail extends Component {
    state ={
      taskDetail: this.props.taskData
    };
    componentDidMount(){
        this.props.requestTaskDetail();
    }

    componentWillReceiveProps = (prevProps, currProps) => {
        this.setState({
            taskDetail: prevProps.taskData,
        });
        console.log(prevProps.taskData);
    }
    updateTask = () => {
       this.props.updateTaskDetail(this.state.taskDetail);
        setTimeout(1000, this.props.requestTasks());
    }
    handleChange = (event) => {
        var taskDetail = {...this.state.taskDetail};
        taskDetail.beatDescription = event.target.value;
        this.setState({taskDetail});
    }
    render(){
        return (
            <div style={{padding:"10px"}}>
                <table>
                    <tbody>
                    <tr>
                        <td style={{float:"left"}} colSpan="2">
                            <label>Task Name: {this.state.taskDetail.beatName}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea value={this.state.taskDetail.beatDescription}
                            onChange={this.handleChange}  cols={40} rows={7}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td style={{float:"left"}}>
                            <button onClick={this.updateTask}>Save</button>
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