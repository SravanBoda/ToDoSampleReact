import {actionTypes} from './actions';

const intialState = {
    isLoading: true,
    taskData: { beatId: 0, beatName: '', beatDescription: ''}
}

const taskDataReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.REQ_TASKDETAIL:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case actionTypes.GET_TASKDETAIL:
            return {
                ...state,
                isLoading: false,
                taskData: {
                    ...action.payload
                }
            };
        case actionTypes.UPD_TASKDETAIL:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }    
        default: return state;
    }
}

export default taskDataReducer;