import actionTypes from '../actions/actionTypes';

export default function loginReducer(state={}, action){
  switch(action.type){
    case actionTypes.LOGIN_SUCESSFUL:
      console.log(action.payload) 
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}