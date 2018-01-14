import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import newUserReducer from './newUserReducer';
import submitReducer from './submitReducer';

const rootReducer = combineReducers({
    loginReducer,
    newUserReducer,
    submitReducer
});

export default rootReducer;

const initialState = {};

export const reducer = (state=initialState, action) => {
    return state;
};
