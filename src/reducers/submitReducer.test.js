import submitReducer from "./submitReducer";

describe('submit reducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const initialState = {};
        const state = submitReducer(initialState, {type: ""});
        expect(state).toEqual(initialState);
    })
})