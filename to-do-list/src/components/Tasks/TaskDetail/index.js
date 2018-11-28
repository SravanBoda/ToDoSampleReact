import {bindActionCreators} from 'redux';
import TaskDetail from './TaskDetail';
import {connect} from 'react-redux';
import {requestTaskDetail, getTaskDetail, updateTaskDetail} from '../../../redux/Tasks/TaskDetail/actions';
import {requestTasks} from '../../../redux/Tasks/TaskList/actions';

const mapsStoreToProps = (store) =>{
    return{
        taskData: store.taskDetail.taskData,
        isLoading: store.taskDetail.isLoading
    } 
}

const mapActionsToProps = dispatch => bindActionCreators({
    requestTaskDetail, getTaskDetail, updateTaskDetail, requestTasks 
},dispatch);

export default connect(mapsStoreToProps, mapActionsToProps)(TaskDetail);