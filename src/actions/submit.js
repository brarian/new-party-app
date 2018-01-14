import actionTypes from './actionTypes';

const submitAction = (formData) => {
	console.log('inside submit action');
	console.log(formData)
	const payload = {
		submitResponse: "form submitted",
		eventData: formData
	}
	//need to send this form to the API 
	//here is where we communicate to mongo to save etc...
	return(dispatch) => {
		return dispatch({
			type: actionTypes.SUBMIT,
			payload,
		})
	}
}

export default submitAction