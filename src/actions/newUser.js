import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';
import axios from 'axios';
const newUserAction = (credentials) => {
  return (dispatch) => {
   return  axios.post(`${API_BASE_URL}/users/`, credentials)
    .then((user)=> {
      const { token } = user.data;
      window.localStorage.setItem('token', token)
      return  dispatch({
        type: actionTypes.NEW_USER,
        payload: token
      });
    }).catch((error)=> {
      console.log(error)
    })
  }
}

export default newUserAction