import actionTypes from "../actions/actionTypes";

export default function partyDataReducer(state={}, action){
    switch(action.type){
        case actionTypes.PARTY_DATA:
        console.log('~~~~~~~~~~~~~~~> ', action.payload)
        return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}