import * as profileTypes from '../constants/profileConstants'

export const profileReducer = (state = {profile:[]}, action) => {
    switch (action.type) {
        case profileTypes.GET_PROFILE_REQUEST:
            return {
                loading: true
            }
        case profileTypes.GET_PROFILE_SUCCESS:
            return {
                loading: false,
                profile: action.payload
            }
        case profileTypes.GET_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case profileTypes.CREATE_PROFILE_REQUEST:
            return {
                loading: true
            }
        case profileTypes.CREATE_PROFILE_SUCCESS:
            return {
                loading: false,
                profile: action.payload
            }
        case profileTypes.CREATE_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            case profileTypes.UPDATE_PROFILE_REQUEST:
                return {
                    loading: true
                }
            case profileTypes.UPDATE_PROFILE_SUCCESS:
                return {
                    loading: false,
                    profile: action.payload
                }
            case profileTypes.UPDATE_PROFILE_FAIL:
                return {
                    loading: false,
                    error: action.payload
                }
        default:
            return state
    }
}