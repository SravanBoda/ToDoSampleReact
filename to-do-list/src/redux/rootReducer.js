import { combineReducers } from "redux";
import taskListReducer from "./Tasks/TaskList/reducer";
import taskDataReducer from './Tasks/TaskDetail/reducer';

export default combineReducers({
    taskListData :  taskListReducer,
    taskDetail: taskDataReducer
});