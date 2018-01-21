import { loginReducer } from './loginReducer';
import { loginAction, user } from '../actions/login';


describe('login reducer', () => {
 it('should set initial state when nothing is passed in', () => {
  const state = loginReducer(' ', { type: ' ' });
  expect(state).toEqual({
   state
  })
 })
})