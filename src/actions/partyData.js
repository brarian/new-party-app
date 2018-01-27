import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';


const partyDataAction = (user) => {
	return(dispatch) => {
		return fetch(`${API_BASE_URL}/profile`, {
			headers: { 
				'Accept': 'application/json',
			},
			method: "get" 
		}).then(response => response.json())
		.then(json => {
			console.log('parsed json', json);
		})
	}
}

export default partyDataAction