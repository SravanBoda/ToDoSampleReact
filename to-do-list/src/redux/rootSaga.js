import {all} from 'redux-saga/effects'
import taskListSagas from './Tasks/TaskList/saga'
import taskDetailSagas from './Tasks/TaskDetail/saga'
function* rootSagas(){
    yield all([
        taskListSagas, taskDetailSagas
    ]);
}

export default rootSagas;