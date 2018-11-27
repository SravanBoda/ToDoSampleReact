import {bindActionCreators} from 'redux';
import TaskDetail from './TaskDetail';
import {connect} from 'react-redux';
import {requestTaskDetail} from '../../../redux/Tasks/TaskDetail/actions';

const mapsStoreToProps = (store) =>{
    return{
        taskData: store.taskDetail.taskData,
        isLoading: store.taskDetail.isLoading
    } 
}

const mapActionsToProps = dispatch => bindActionCreators({
    requestTaskDetail
},dispatch);

export default connect(mapsStoreToProps, mapActionsToProps)(TaskDetail);