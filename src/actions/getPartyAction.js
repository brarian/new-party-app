import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';

const getPartyDataAction = (userId) => {
    return (dispatch) => {
        return fetch(`${API_BASE_URL}/party/user/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                return dispatch({
                    type: actionTypes.GET_PARTY_DATA, 
                    payload: { parties : data.party } 
                })
            })
    }
}

export default getPartyDataAction