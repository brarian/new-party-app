import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';


const partyDataAction = (userId) => {
	return(dispatch) => {
		return fetch(`${API_BASE_URL}/party/${userId}`, {
			headers: { 
				'Accept': 'application/json',
			},
			method: "get" 
		}).then(response => response.json())
		.then((json) => {
			return dispatch({
				type: actionTypes.PARTY_DATA, 
				payload: json.party
			});
		})
	}
}

export default partyDataAction