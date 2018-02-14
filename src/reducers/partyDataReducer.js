import actionTypes from "../actions/actionTypes";

export default function partyDataReducer(state={}, action){
    switch(action.type){
        case actionTypes.PARTY_DATA:
            console.log([ ...state, ...action.payload]);
            return [ ...state, ...action.payload];
            //return Object.assign({}, state, action.payload);
        case actionTypes.GET_PARTY_DATA:
            return Object.assign({}, state, action.payload)
        case actionTypes.GET_PARTY_BY_ID:
            return Object.assign({}, state, action.payload)
        case actionTypes.GET_STATUS:
            return Object.assign({}, state, { party: action.payload})
        default:
            return state;
    }
}
