import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';
import axios from 'axios';


const partyDataAction = (formData) => {
	return(dispatch) => {
		return axios.post(`${API_BASE_URL}/party/`, formData)
		.then((response) => {
			return dispatch({
				type: actionTypes.PARTY_DATA, 
				payload: response.data.party
			})
		}).catch((error) => {
			console.log(error)
		})
	}
}

export default partyDataAction