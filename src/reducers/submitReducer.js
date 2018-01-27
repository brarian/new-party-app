import actionTypes from '../actions/actionTypes';

export default function submitReducer(state={}, action){
    switch(action.type){
        case actionTypes.SUBMIT:
            // console.log("==============>", state, action.payload);
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}