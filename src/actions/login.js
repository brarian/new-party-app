import actionTypes from './actionTypes';

const loginAction =  (credentials) => {
    // here's some api stuff and login was successful
    const user = {
        username: 'daisy',
        email: 'daisy@gmail.com'
    }
    console.log("I am in the action");
    return (dispatch) => {
        return dispatch({
            type: actionTypes.LOGIN_SUCESSFUL,
            payload: user
        });
    }

} 

export default loginAction
