import loginReducer from './loginReducer';
import loginAction from '../actions/login';

describe('login reducer', () => {
	it('should set initial state when nothing is passed in', () => {
		const initialState = {};
		const state = loginReducer({}, loginAction({type: ''}));
		expect(initialState).toEqual(state);
	})
 
})