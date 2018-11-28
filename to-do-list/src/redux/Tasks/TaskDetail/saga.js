import axios from 'axios';
import { all, takeLatest } from 'redux-saga/effects';
import { actionTypes } from './actions';
//import {receiveTasks} from '../TaskList/actions';

function* updateTask(task){
    const payload = task.payload;
    //console.log(payload);
    const statusNumber = yield axios.put('http://cms.services.com/api/beats/' + payload.beatId,payload)
                            .then(result => result.status);
    console.log("put success" + statusNumber);                        
    // if(statusNumber == 200){
    //     const tasks = yield axios.get('http://cms.services.com/api/beats')
    //                         .then(result => result.data);
    //     console.log(tasks);
    //     yield put(receiveTasks(tasks));
    // }
}

// function viewTask(task){
//     put(getTaskDetail(task));
// }


export default all([
    takeLatest(actionTypes.UPD_TASKDETAIL, updateTask)
    //takeLatest(actionTypes.VEW_TASK, viewTask),
]);