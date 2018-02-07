import  partyDataReducer  from "./partyDataReducer";

describe('party Data reducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const initialState = {};
        const state = partyDataReducer(initialState, {type: " "});
        expect(state).toEqual(initialState);
    })
})