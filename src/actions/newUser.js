import jwtDecode from 'jwt-decode';
import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';

const newUserAction = (credentials) => {
  return (dispatch) => {
    return fetch(`${API_BASE_URL}/users/`, {
      headers: { 
				'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "post",
      body: JSON.stringify(credentials),
    })
    .then((user)=> user.json())
    .then((user)=> {
      const { token } = user;
      window.localStorage.setItem('token', token)
      const decodedUser = jwtDecode(token);
      console.log(decodedUser);
      return  dispatch({
        type: actionTypes.NEW_USER,
        payload: decodedUser
      });
    }).catch((error)=> {
      console.log(error)
    })
  }
}

export default newUserAction