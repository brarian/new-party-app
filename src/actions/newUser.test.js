
import newUserAction from './newUser';
import actionTypes from './actionTypes'
import moxios from 'moxios';
import  thunk  from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('newUser', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should return the action', () => {
	const response = {
		token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImZyZWVtaWxlIiwidXNlcklkIjoiNWE3MTBiODQ2YmUzMjJkZTU5MDhjMTVjIiwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTE3MzU3OTU3LCJleHAiOjE1MTc0NDQzNTd9.rjUnaV9MHJFbE2TAIZSTMMrMlmjGf8q5sw7W6hEfnBM',
		message: 'user was created' 
	}
	moxios.wait(() => {

		const request = moxios.requests.mostRecent();
		request.respondWith({
		  status: 201,
		  response,
		});
	  });
  
	  const expectedActions = 
		[{ type: actionTypes.NEW_USER,
		 payload: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImZyZWVtaWxlIiwidXNlcklkIjoiNWE3MTBiODQ2YmUzMjJkZTU5MDhjMTVjIiwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTE3MzU3OTU3LCJleHAiOjE1MTc0NDQzNTd9.rjUnaV9MHJFbE2TAIZSTMMrMlmjGf8q5sw7W6hEfnBM' 
		} ];
  
	  const store = mockStore({ user: {} })
  
	  return store.dispatch(newUserAction(response)).then(() => {
		// return of async actions
		expect(store.getActions()).toEqual(expectedActions);
	  });
	})
})