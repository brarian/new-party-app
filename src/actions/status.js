import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';
import axios from 'axios';

const getStatus = (partyId) => {
    return (dispatch) => {
        return axios.put(`/api/party/${id}/status`, partyId)
            .then((response) => { 
                return dispatch({
                    type: actionTypes.GET_STATUS, 
                    payload: response.data.statusUpdate 
                })
            }).catch((error ) => {
                console.log(error);
        })
    }
}

export default getStatusAction