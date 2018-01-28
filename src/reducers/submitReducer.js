import actionTypes from '../actions/actionTypes';

export default function submitReducer(state={}, action){
    switch(action.type){
        case actionTypes.SUBMIT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}