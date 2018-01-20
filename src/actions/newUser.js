import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';

const newUserAction = (credentials) => {
    //more API stuff another response 
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
      return  dispatch({
        type: actionTypes.NEW_USER,
        payload: user
      });
    }).catch((error)=> {
      console.log(error)
    })
  }
}

export default newUserAction