import submitAction from './submit';
import actionTypes from './actionTypes'
import moxios from 'moxios';
import  thunk  from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submit', () => {
    beforeEach(function () {
        moxios.install();
      });
    
      afterEach(function () {
        moxios.uninstall();
    });
    
    it('should return the action', () => {
        const response = {

        }
    moxios.wait(() => {
        const request = moxios.request.mostRecent();
        request.respondWith({
            status: 201, 
            response,
        });
    });

    const expectedActions = 
    [{
        type: actionTypes.SUBMIT, 
        payload: ''
    }]
    })
})