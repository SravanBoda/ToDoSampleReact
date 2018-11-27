import {all} from 'redux-saga/effects'
import taskListSagas from './Tasks/TaskList/saga'
function* rootSagas(){
    yield all([
        taskListSagas
    ]);
}

export default rootSagas;