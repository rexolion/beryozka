import {SUBMIT_AUTHORIZATION, ITEM_CLICKED} from "../Constants/constants";

export function submitLogin(payload) {
    return { payload, type: SUBMIT_AUTHORIZATION}
}

export function openItemModal(payload) {
    return { payload, type: ITEM_CLICKED}
}

