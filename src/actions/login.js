/* eslint-disable */

import axios from 'axios';
import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';

const loginAction = (credentials) => {
  return (dispatch) => {
    return axios.post(`${API_BASE_URL}/login`, credentials)
    .then((user) => {
      const { token } = user.data;
      window.localStorage.setItem('token', token)
      return dispatch({
        type: actionTypes.LOGIN_SUCESSFUL,
        payload:  {token} 
      })
    }).catch((error) => {
      console.log(error);
    })
  }
}

export default loginAction
