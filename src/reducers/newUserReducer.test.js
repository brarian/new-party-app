import { newUserReducer } from "./newUserReducer";

describe('newUser reducer', () => {
	it('should set initial state when nothing is passed in', () => {
		const initialState = {};
  	const reducer = newUserReducer(initialState, {type: " "});
  	expect(reducer).toEqual(initialState)
	})
})