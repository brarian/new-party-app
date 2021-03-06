import actionTypes from './actionTypes';
import { API_BASE_URL } from "../config";

const submitAction = (formData) => {
	return (dispatch) => {
		return fetch(`${API_BASE_URL}/party`, {
			headers: {
				'Accept' : 'application/json', 
				'Content-Type': 'application/json'
			},
			method: "post",
			body: JSON.stringify(formData)
		})
		.then((data) => data.json())
		.then((data) => {
			window.location.href= "profile"
			return dispatch({
				type: actionTypes.SUBMIT,
				payload: data 
			});
		})
		.catch((error) => {
			console.log(error.message)
		})
	}
}

export default submitAction