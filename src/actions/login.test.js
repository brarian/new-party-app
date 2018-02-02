import loginAction from './login';
import actionTypes from './actionTypes'
import moxios from 'moxios';
import  thunk  from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('login', () => {
    beforeEach(function () {
        moxios.install();
      });
    
    afterEach(function () {
        moxios.uninstall();
    });

    it('should return the login action', () => {
        const response = {
            message: "login successfull", 
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImJuYW1vIiwidXNlcklkIjoiNWE2N2JiMDhiNzY2NGM5NDNkMWI1MTA3IiwiZW1haWwiOiJhc2RAZW1haWwuY29tIiwiaWF0IjoxNTE3NTMxNzcxLCJleHAiOjE1MTc2MTgxNzF9.yuFqz9AdDW3E3ipeREDc-UGgwAMkT-yC6uaUnQTzIvY"
        }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 204,
                response, 
            });
        });

        const expectedActions = 
        [{
            type: actionTypes.LOGIN_SUCESSFUL,
            payload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImJuYW1vIiwidXNlcklkIjoiNWE2N2JiMDhiNzY2NGM5NDNkMWI1MTA3IiwiZW1haWwiOiJhc2RAZW1haWwuY29tIiwiaWF0IjoxNTE3NTMxNzcxLCJleHAiOjE1MTc2MTgxNzF9.yuFqz9AdDW3E3ipeREDc-UGgwAMkT-yC6uaUnQTzIvY"
        }];

        const store = mockStore({})

        return store.dispatch(loginAction(response)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
    
})