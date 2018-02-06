import { getPartyDataAction, GET_PARTY_DATA } from './getPartyAction';
import actionTypes from './actionTypes';
// need to do a regular jest test
describe('getPartyDataAction', () => {
    it(`should return the action`, () =>{
        expect(actionTypes.GET_PARTY_DATA).toEqual("GET_PARTY_DATA");
    })
})