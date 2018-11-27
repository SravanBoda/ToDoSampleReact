import React, {Component} from 'react';

class TaskDetail extends Component {
    state ={
      taskDetail: this.props.taskData
    };
    componentDidMount(){
        console.log(this.state);
        this.props.requestTaskDetail();
        console.log(this.state.taskDetail);
    }
    componentDidUpdate(){
        // this.setState({
        //     taskId: this.props.taskId, 
        //     taskName: this.props.taskName,
        //     taskDescription: this.props.taskDescription
        // });
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
                            <textarea defaultValue={this.state.taskDetail.beatDescription}></textarea>
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