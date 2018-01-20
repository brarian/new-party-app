import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';

const loginAction =  (credentials) => {
	return (dispatch) => {
	return fetch(`${API_BASE_URL}/api/login'`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "post",
		body: JSON.stringify(credentials),	
	})
	.then((user)=>(
			user.json()
	))
	.then((user)=> {
		console.log("=================>", user);
		return  dispatch({
				type: actionTypes.LOGIN_SUCESSFUL,
				payload: user
		});
	})
	.catch((error)=> {
		console.log(error)
	})
}

} 

export default loginAction
