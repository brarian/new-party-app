import partyDataAction from './partyData';
import actionTypes from './actionTypes'
import moxios from 'moxios';
import  thunk  from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('partyData', () => {

    beforeEach(function () {
        moxios.install();
      });
    
      afterEach(function () {
        moxios.uninstall();
      });

      it('should return the action', () => {
        const response = {
                party: {
                    "menu":["sdfdsf", "sdfdsf"],
                    "name":"asdfadf",
                    "date":"2018-02-28",
                    "time":"05:05 am",
                    "userId":"5a67bb08b7664c943d1b5107",
                    "_id":"5a73ea962d7885f816acd61a",
                    "bigGuestList":["alalal"],
                    "subQuestions":[]
                }
            }        
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 201,
                response
            });
        });

        const expectedActions = [{
            type: actionTypes.PARTY_DATA,
            payload: {
                    "menu":["sdfdsf", "sdfdsf"],
                    "name":"asdfadf",
                    "date":"2018-02-28",
                    "time":"05:05 am",
                    "userId":"5a67bb08b7664c943d1b5107",
                    "_id":"5a73ea962d7885f816acd61a",
                    "bigGuestList":["alalal"],
                    "subQuestions":[]
            }
        }];

        const store = mockStore({ party: {} })

        return store.dispatch(partyDataAction(response)).then((response) => {
            console.log(response)
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
})