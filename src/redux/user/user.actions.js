import { UserActionsTypes } from "./user.type"

export const setCurrentUser = user => ({
    type: UserActionsTypes.SET_CURRENT_USER,
    payload: user
})