import {SUBMIT_AUTHORIZATION, ITEM_CLICKED, ACTIVATE_EXTENDED_SEARCH} from "../Constants/constants";

export function submitLogin(payload) {
    return { payload, type: SUBMIT_AUTHORIZATION}
}

export function openItemModal(payload) {
    return { payload, type: ITEM_CLICKED}
}

export function activateExtendedSearch(payload) {
    return { payload, type: ACTIVATE_EXTENDED_SEARCH}
}