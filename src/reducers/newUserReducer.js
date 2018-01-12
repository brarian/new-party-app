import actionTypes from '../actions/actionTypes';

export default function newUserReducer(state={}, action){
    switch(action.type){
        case actionTypes.NEW_USER:
        console.log('==============> ', action.payload)
        //use object.assign because we dont want the state to be mutable
        return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}