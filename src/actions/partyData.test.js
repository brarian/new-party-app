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
            
        }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                "party": {
                            "__v":0,
                            "name":"asdfadf",
                            "date":"2018-02-28",
                            "time":"05:05 am",
                            "userId":"5a67bb08b7664c943d1b5107",
                            "_id":"5a73ea962d7885f816acd61a",
                            "bigGuestList":["alalal"],
                            "subQuestions":[]
                        }
            });
        });

        const expectedActions = 
        [{
            type: actionTypes.PARTY_DATA,
            payload:
            {   
                "party":
                    {
                    "__v":0,
                    "name":"asdfadf",
                    "date":"2018-02-28",
                    "time":"05:05 am",
                    "userId":"5a67bb08b7664c943d1b5107",
                    "_id":"5a73ea962d7885f816acd61a",
                    "bigGuestList":["alalal"],
                    "subQuestions":[]
                    }
            }
        }];

        const store = mockStore({ party: {} })

        return store.dispatch(partyDataAction(response)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
})