import React, {Component} from 'react';
import { Table, Button, Modal } from 'antd';
// const tasks = [{
//     key: 1,
//     beatId: 1,
//     beatName: 'Task 1',
//     beatDescription: 'Break fast is ready',
//   },
//   {
//     key: 2,
//     beatId: 2,
//     beatName: 'Task 2',
//     beatDescription: 'Lunch is not available'
//   },
//   {
//     key: 3,
//     beatId: 3,
//     beatName: 'Task 3',
//     beatDescription: 'Snacks are just started'
// },
// {
//     key : 4,
//     beatId: 4,
//     beatName: 'Task 4',
//     beatDescription: 'Dinner is on the way'
// }]; 
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
       

    // viewTask = (beatId) => {
    //     console.log(beatId);
    // }
    state = {
        taskList: this.props.tasks,
        selectedRowKeys: [],
        isLoading: false
    }
    componentDidMount(){
        this.props.requestTasks();
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevProps.isLoading ===true && this.props.isLoading === false) {
            this.setState({taskList: this.props.tasks});
        }
    }
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    }

    viewTask = (record) => {
        this.props.viewTask(record);
    }
    
    //handleBulkDelete
    handleBulkDelete = () => {
        let dataSource = [...this.state.taskList];
        const _selectedKeys = [...this.state.selectedRowKeys];
        for (let key = 0; key < _selectedKeys.length; key++) {
            //this.handleDelete(_selectedKeys[key]);
            dataSource =[...dataSource.filter(item => item.key !== _selectedKeys[key])];
        }
        this.setState({ taskList: dataSource});
      }
    handleDelete = (key) => {
        const dataSource = [...this.state.taskList];
        this.setState({ taskList: dataSource.filter(item => item.key !== key) });
      }
    handleAdd = () => {
        const count  = this.state.taskList.length + 1;
        const dataSource = this.state.taskList;
        const newData = {
            key: count,
            beatId: count,
            beatName: "beat " + count,
            beatDescription: 'Sample description' + count
        };
        this.setState({
            taskList: [...this.state.taskList, newData],
          count: count + 1,
        });
      }

    handleAddFromModal = (newlyAddedTask) => {
      const count  = this.state.taskList.length + 1;
      const dataSource = this.state.taskList;
      const newData = {
          key: count,
          beatId: count,
          beatName: newlyAddedTask.beatName,
          beatDescription: newlyAddedTask.beatDescription
      };
      this.props.addTaskDetail(newData);
      this.props.requestTasks();
      // this.setState({
      //     taskList: [...this.state.taskList, newData],
      //   count: count + 1,
      // });
    }
    
      handleSave = (row) => {
        const newData = [...this.state.taskList];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ dataSource: newData });
      }

    render(){
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            columnWidth: '3%',
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        const hasSelected = selectedRowKeys.length > 0;
        
          const newTaskData = {
            key: 0,
            beatId: 0,
            beatName: "beat",
            beatDescription: 'Sample description'
        };
        return (

            <div style={{width:"80%"}}>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.handleBulkDelete} disabled={!hasSelected}
                        loading={this.state.isLoading}>Delete</Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                    
                    <AddNewModalPopup updateNewTask = {this.handleAddFromModal} newTaskData={newTaskData} ></AddNewModalPopup>
                </div>
                
                <Table dataSource ={this.state.taskList} columns={this.columns} rowSelection={rowSelection} style={{width:"100%"}}
                onRow={(record) =>{
                    return {
                        onClick:() => { this.viewTask(record);}
                    }
                }
                }/>               
               
            </div>
        )
    };
}




class AddNewModalPopup extends React.Component {
    state = { visible: false,newTaskData: this.props.newTaskData }
  
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.props.updateNewTask(this.state.newTaskData);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }

    handleNameOnChange = (val) => {
      this.state.newTaskData.beatName = val;
      console.log(this.state.newTaskData);
    }
  
    handleDescOnChange = (val) => {
      this.state.newTaskData.beatDescription = val;
      console.log(this.state.newTaskData);
    }
    render() {
      return (
        <div>
          <Button type="primary" onClick={this.showModal}  style={{ float:"right", marginRight: "25px"}}>
            Add New
          </Button>
          <Modal
            title="Add New Task"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <table>
                    <tbody>
                    <tr>
                        <td style={{float:"left"}} colSpan="2">
                             <label>Beat Name</label>
                            <input defaultValue={this.state.newTaskData.beatName} className="ant-input" onChange={(e) => this.handleNameOnChange(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Description</label>
                            <textarea defaultValue={this.state.newTaskData.beatDescription} className="ant-input" onChange={(e) => this.handleDescOnChange(e.target.value)}></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>
          </Modal>
        </div>
      );
    }
  }
  
  