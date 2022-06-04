import { UserActionsTypes } from "./user.type"

export const googleSignStart = () => ({
    type: UserActionsTypes.GOOGLE_SIGN_IN_START
})

export const SignSuccess = user => ({
    type: UserActionsTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const SignInFailure = error => ({
    type: UserActionsTypes.SIGN_IN_FAILURE,
    payload: error
})

export const emailSignStart = (emailAndPassword) => ({
    type: UserActionsTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})
