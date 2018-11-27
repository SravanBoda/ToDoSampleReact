export const actionTypes= {
    REQ_TASKDETAIL: 'REQ_TASKDETAIL',
    GET_TASKDETAIL: 'GET_TASKDETAIL',
    UPD_TASKDETAIL: 'UPD_TASKDETAIL'
};

export const requestTaskDetail = () => {
    return {
        type: actionTypes.REQ_TASKDETAIL//,
        //payload: data
    }
};

export const getTaskDetail = (data) => {
    return {
        type: actionTypes.GET_TASKDETAIL,
        payload: data
    }
};

export const updateTaskDetail = (data) => {
    return {
        type: actionTypes.UPD_TASKDETAIL,
        payload: data
    }
};