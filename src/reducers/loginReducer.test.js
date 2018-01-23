import {loginReducer} from './loginReducer';
import { loginAction, credentials } from "../actions/login";

describe('login reducer', () => {
	it('should set initial state when nothing is passed in', () => {
    const initialState = {};
  	const state = loginReducer(initialState, {type: ""});
  	expect(state).toEqual(initialState)
	})
 
	it('should handle LOGIN_SUCCESSFUL', () => {
		const initialState = {};
		const reducer = loginReducer({}, initialState, {type: 'LOGIN_SUCESSFUL'})
		expect(initialState).toEqual(reducer)
 	})
})