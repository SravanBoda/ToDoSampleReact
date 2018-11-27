import { actionTypes as taskDetailTypes } from '../TaskDetail/actions';

export const actionTypes= {
    REQ_TASKS: 'REQ_TASKS',
    RCV_TASKS: 'RCV_TASKS',
    VEW_TASK: 'VEW_TASK'
};

export const requestTasks = () => {
    return {
        type: actionTypes.REQ_TASKS,
        isLoading: true
    }
};

export const receiveTasks = (data) => {
    return {
        type: actionTypes.RCV_TASKS,
        payload: data
    }
};

export const viewTask = (data) => {
    return {
        type: taskDetailTypes.GET_TASKDETAIL,
        payload: data
    }
};