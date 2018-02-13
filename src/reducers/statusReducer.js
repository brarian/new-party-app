import actionTypes from "../actions/actionTypes";

export default function statusReducer(state={}, action){
    switch(action.type){
        case actionTypes.GET_STATUS:
        return Object.assign({}, state, action.payload);
        default: 
            return state;
    }
}