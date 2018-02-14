import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';
import axios from 'axios';

const updateStatusAction = (partyId, statusUpdate) => {
    return (dispatch) => {
        return axios.put(`${API_BASE_URL}/party/${partyId}`, statusUpdate)
            .then((response) => { 
                return dispatch({
                    type: actionTypes.GET_STATUS, 
                    payload: response.data
                })
            }).catch((error ) => {
                console.log(error);
        })
    }
}

export default updateStatusAction