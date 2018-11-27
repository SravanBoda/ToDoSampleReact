import {bindActionCreators} from 'redux';
import TaskList from './TaskList';
import {connect} from 'react-redux';
import {requestTasks, viewTask} from '../../../redux/Tasks/TaskList/actions';

const mapsStoreToProps = (store) =>{
    return{
       tasks: store.taskListData.data,
       isLoading: store.taskListData.isLoading
    } 
}

const mapActionsToProps = dispatch => bindActionCreators({
    requestTasks, viewTask
},dispatch);

export default connect(mapsStoreToProps, mapActionsToProps)(TaskList);