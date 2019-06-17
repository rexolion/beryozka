import {SUBMIT_AUTHORIZATION} from "../Constants/constants";

export function submitLogin(payload) {
    return { payload, type: SUBMIT_AUTHORIZATION}
}