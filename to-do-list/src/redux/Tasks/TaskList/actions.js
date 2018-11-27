export const actionTypes= {
    REQ_TASKS: 'REQ_TASKS',
    RCV_TASKS: 'RCV_TASKS'
};

export const requestTasks = () => {
    return {
        type: actionTypes.REQ_TASKS
    }
};

export const receiveTasks = (data) => {
    return {
        type: actionTypes.RCV_TASKS,
        payload: data
    }
};