import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';


const getStatusAction = (partyId) => {
    return (dispatch) => {
        return fetch(`${API_BASE_URL}/status/${partyId}`)
            .then((response) => response.json())
            .then((data) => {
                return dispatch({
                    type: actionTypes.GET_STATUS, 
                    payload: { data }
                })
            })
    }
}

export default getStatusAction