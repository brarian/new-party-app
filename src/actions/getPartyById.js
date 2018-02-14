import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';

const getPartyByIdAction = (partyId) => {
    return (dispatch) => {
        return fetch(`${API_BASE_URL}/party/${partyId}`)
        .then((response) => response.json())
        .then((party) => {
            return dispatch({
                type: actionTypes.GET_PARTY_BY_ID,
                payload: { party }
            })
        })
        
    }
}

export default getPartyByIdAction