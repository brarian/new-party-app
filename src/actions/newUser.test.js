import {newUser } from './newUser';

describe('newUser', () => {
  it('should return the action', () => {
		const outcome = newUser;
		const action = newUserAction(outcome);
		expect(action.type).toEqual(NEW_USER)
		expect(action.outcome).toEqual(newUser)
	})
})