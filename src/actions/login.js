import jwtDecode from 'jwt-decode';
import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';

const loginAction = (credentials) => {
    //more API stuff another response 
  return (dispatch) => {
    return fetch(`${API_BASE_URL}/login`, {
      headers: { 
				'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "post",
      body: JSON.stringify(credentials),
   
    })
    .then((user ) => user.json()) 
    .then((user)=> {
      const {token} = user;
      window.localStorage.setItem('token', token)
      const decodedUser = jwtDecode(token);
      return  dispatch({
        type: actionTypes.LOGIN_SUCESSFUL,
        payload: decodedUser
      });
    }).catch((error)=> {
      console.log(error)
    })
  }
}

export default loginAction
