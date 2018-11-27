import {actionTypes} from './actions';

const intialState = {
    isLoading: true,
    tasks: []
}

const taskListReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.REQ_TASKS:
            return {
                ...state, isLoading: true
            };
        case actionTypes.RCV_TASKS:
            return {
                ...state, isLoading: false, data: action.payload
            }    
        default: return state;
    }
}

export default taskListReducer;