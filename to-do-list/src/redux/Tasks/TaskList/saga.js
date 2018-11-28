import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';
import { actionTypes, receiveTasks } from './actions';
import TasksData from '../../../data/TasksData' 
function* getTasks(){
    // const tasks = yield axios.get('http://cms.services.com/api/beats')
    //                         .then(result => result.data);
    const tasks = TasksData;
    console.log("1");
    console.log(tasks);
    yield put(receiveTasks(tasks));
}

function* addTask(task){
// const addTaskResponce = yield axios.post('http://cms.services.com/api/beats',task)
//                                     .then(result=>result.status);
console.log('adding new task - api call')

}

export default all([
    takeLatest(actionTypes.REQ_TASKS, getTasks),
    takeLatest(actionTypes.ADD_TASKDETAIL, addTask)
]);