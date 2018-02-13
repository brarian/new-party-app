import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import newUserReducer from './newUserReducer';
import submitReducer from './submitReducer';
import partyDataReducer from "./partyDataReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
    loginReducer,
    newUserReducer,
    submitReducer,
    partyDataReducer, 
    statusReducer
});

export default rootReducer;

const initialState = {};

export const reducer = (state=initialState, action) => {
    return state;
};
