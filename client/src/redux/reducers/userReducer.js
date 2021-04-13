import * as userTypes from '../constants/UserConstants'

export const getUser = (state = { user: {} }, action) => {
    switch (action.type) {
        case userTypes.GET_USER_REQUEST:
            return {
                loading: true,
            }
        
        case userTypes.GET_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
        
        case userTypes.GET_USER_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }
}