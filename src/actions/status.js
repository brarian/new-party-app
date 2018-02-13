import actionTypes from './actionTypes';
import { API_BASE_URL } from '../config';
import axios from 'axios';

const getStatusAction = (party) => {
    return (dispatch) => {
        return axios.put(`${API_BASE_URL}/party/${party._id}/status`, party)
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