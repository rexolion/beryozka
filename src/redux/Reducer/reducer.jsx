import { SUBMIT_AUTHORIZATION, ITEM_CLICKED, ACTIVATE_EXTENDED_SEARCH } from '../Constants/constants';

const initialState = {
    authorized: false,
    itemModalIsOpen: false,
    extendedSearchActivated: false,
};

function Reducer(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_AUTHORIZATION:
            return Object.assign({}, state, { authorized: action.payload})
        case ITEM_CLICKED:
            return Object.assign({}, state, { itemModalIsOpen: action.payload})
        case ACTIVATE_EXTENDED_SEARCH:
            return Object.assign({}, state, { extendedSearchActivated: action.payload})
        default:
            return state;
    }
}

export default Reducer;