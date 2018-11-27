import React, {Component} from 'react';
import { Table, Button } from 'antd';
const tasks = [{
    key: 1,
    beatId: 1,
    beatName: 'Task 1',
    beatDescription: 'Break fast is ready',
  },
  {
    key: 2,
    beatId: 2,
    beatName: 'Task 2',
    beatDescription: 'Lunch is not available'
  },
  {
    key: 3,
    beatId: 3,
    beatName: 'Task 3',
    beatDescription: 'Snacks are just started'
},
{
    key : 4,
    beatId: 4,
    beatName: 'Task 4',
    beatDescription: 'Dinner is on the way'
}]; 
export default class TaskList extends Component {
    columns = [
        {
            title : 'Task Name',
            key: 'beatName',
            dataIndex:'beatName',
            width: '10%'
        },
        {
            title : 'Task Description',
            key: 'beatDescription',
            dataIndex:'beatDescription',
            width: '20%'
        }
        // {
        //     title: 'View',
        //     key: 'action',
        //     render: (text, record, index) => (
        //         <span>
                   
        //           <Button loading={this.viewTask(record.beatId) } onClick={this.viewTask}>View</Button>
        //         </span>
        //         // 
        //     )
        //}
    ];
    
       
     viewTask = (beatId) => {
        console.log(beatId);
    }
    state = {
        taskList: this.props.tasks,
        selectedRowKeys: [],
        isLoading: false
    }
    componentDidMount(){
        this.props.requestTasks();
    }
    componentDidUpdate(prevProps) {
        if(prevProps.isLoading ===true && this.props.isLoading === false) {
            this.setState({taskList: this.props.tasks});
        }
    }
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    }
    render(){
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            columnWidth: '3%',
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (

            <div style={{width:"80%"}}>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected}
                        loading={this.state.isLoading}>Delete</Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                    <Button type="primary" style={{float:"right", marginRight: "25px"}}>Add</Button>
                </div>
                
                <Table dataSource ={this.state.taskList} columns={this.columns} rowSelection={rowSelection} style={{width:"100%"}}
                onRow={(record) =>{
                    return {
                        onClick:() => { console.log(record);}
                    }
                }
                }/>               
               
            </div>
        )
    };
}