import { takeLatest, all, put, call} from "redux-saga/effects";

import { UserActionsTypes } from "../user/user.type";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas(){
    yield(all([call(onSignOutSuccess)]))
}