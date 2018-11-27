import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';
import { actionTypes, receiveTasks } from './actions';

function* getTasks(){
    const tasks = yield axios.get('http://cms.services.com/api/beats')
                            .then(result => result.data);
    yield put(receiveTasks(tasks));
}

export default all([
    takeLatest(actionTypes.REQ_TASKS, getTasks)
]);