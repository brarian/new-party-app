import actionTypes from './actionTypes';

const newUserAction = (credentials) => {
    //more API stuff another response 
    const user = credentials;

console.log('inside the newUserAction');
    return (dispatch) => {
        return dispatch({
            type: actionTypes.NEW_USER, 
            payload: credentials
        })
    }

}

export default newUserAction