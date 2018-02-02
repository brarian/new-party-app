import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';
import axios from 'axios';


const partyDataAction = (userId) => {
	return(dispatch) => {
		return axios.post(`${API_BASE_URL}/party/${userId}`, userId)
		.then((response) => {
			return dispatch({
				type: actionTypes.PARTY_DATA, 
				payload: response.party
			})
		}).catch((error) => {
			console.log(error)
		})
	}
}


// return(dispatch) => {
// 	return fetch(`${API_BASE_URL}/party/${userId}`, {
// 		headers: { 
// 			'Accept': 'application/json',
// 		},
// 		method: "get" 
// 	}).then(response => response.json())
// 	.then((json) => {
// 		return dispatch({
// 			type: actionTypes.PARTY_DATA, 
// 			payload: json.party
// 		});
// 	})
// }
// }


export default partyDataAction