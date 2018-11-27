export const actionTypes= {
    REQ_TASKDETAIL: 'REQ_TASKDETAIL'
    //RCV_TASKDETAIL: 'RCV_TASKDETAIL'
};

export const requestTaskDetail = (data) => {
    return {
        type: actionTypes.REQ_TASKDETAIL,
        payload: data
    }
};

// export const receiveTasks = (data) => {
//     return {
//         type: actionTypes.RCV_TASKS,
//         payload: data
//     }
// };