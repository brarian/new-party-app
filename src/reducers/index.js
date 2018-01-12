import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import newUserReducer from './newUserReducer';

const rootReducer = combineReducers({
    loginReducer,
    newUserReducer
});

export default rootReducer;

const initialState = {};

export const reducer = (state=initialState, action) => {
    return state;
};
