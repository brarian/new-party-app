import actionTypes from './actionTypes';

import { API_BASE_URL } from '../config';

const loginAction =  (credentials) => {
    // here's some api stuff and login was successful
        return (dispatch) => {
        return fetch(`${API_BASE_URL}/user`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: "post",
            body: JSON.stringify(credentials),
    
        })
        .then((user)=>(user.json()))
        .then((user)=> {
            console.log("=========================+>",user);
           return  dispatch({
                type: actionTypes.LOGIN_SUCESSFUL,
                payload: user
            });
        }).catch((error)=> {
            console.log(error)
        })
    }

} 

export default loginAction
