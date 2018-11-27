import {actionTypes} from './actions';

const intialState = {
    isLoading: true,
    taskData: { beatName: '', beatDescription: ''}
}

const taskDataReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.REQ_TASKDETAIL:
            return {
                ...state,
                data: action.payload
            };
        // case actionTypes.RCV_TASKS:
        //     return {
        //         ...state, isLoading: false, data: action.payload
        //     }    
        default: return state;
    }
}

export default taskDataReducer;