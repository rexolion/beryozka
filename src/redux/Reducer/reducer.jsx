import { SUBMIT_AUTHORIZATION } from '../Constants/constants';

const initialState = {
    authorized: false
};

function Reducer(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_AUTHORIZATION:
            return Object.assign({}, state, { authorized: action.payload})
        default:
            return state;
    }
}

export default Reducer;