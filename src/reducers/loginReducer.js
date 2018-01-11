import actionTypes from '../actions/actionTypes';

export default function loginReducer(state={}, action){
    switch(action.type){
        case actionTypes.LOGIN_SUCCESSFUL: 
            return Object.assign({}, state, action.type);
        default:
            return state;
    }

}